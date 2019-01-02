# Using OpenClover for per-test code coverage generation

## Running the sample:

1. Build the `pets-service` module by running `mvn clean install`

This will create the clover database in "clover-db/clover.db" including the source code information (packages, classes, methods etc). You can see the logs below during the build flow.

```
[INFO] --- clover-maven-plugin:4.3.1:setup (default) @ helloworld ---
[INFO] OpenClover Version 4.3.1, built on September 21 2018 (build-1013)
[INFO] Creating new database at '/home/malintha/wso2apim/gitworkspace/clovertest/sample-msf4j/pets-service/../clover-db/clover.db'.
[INFO] Processing files at 1.8 source level.
[INFO] Clover all over. Instrumented 2 files (1 package).
[INFO] No Clover instrumentation done on source files in: [/home/malintha/wso2apim/gitworkspace/clovertest/sample-msf4j/pets-service/src/test/java] as no matching sources files found (JAVA_LANGUAGE)
```

2. Start the msf4j service with "./start" script. This will start the instrumented msf4j jar file with live coverage recording enabled. This also starts a port 1198 for external test framework to connect with this and sync the coverage with the test cases that are being run.

```
malintha@malintha-ThinkPad-T540p:~/wso2apim/gitworkspace/clovertest/sample-msf4j/pets-service$ ./start 
Distributed coverage is enabled with: name=clover.tcp.server;host=localhost;port=1198;timeout=5000;numClients=1;retryPeriod=1000
Starting distributed coverage client: name=clover.tcp.server;host=localhost;port=1198;timeout=5000;numClients=1;retryPeriod=1000
2019-01-02 12:08:57 INFO  MicroservicesRunner:309 - Microservices server started in 134ms
2019-01-02 12:08:57 INFO  ServerConnectorBootstrap$HTTPServerConnector:207 - HTTP(S) Interface starting on host 0.0.0.0 and port 9090
```

3. Now go to the `pets-service-test` module and run the tests using `mvn clean install` command.

This will run the tests and generates an static html site including the analysis of the coverage.

The generated site for this example is available here:


## Things to note:

"clover-maven-plugin" is included in the build sections of the service module. This is responsible for analysing the source code, instrument the source with clover specific instructions to track the code that are being executed. From this analysis, it creates a database. Here we specify the <cloverDatabase> location where the database is created. 

We also specify the <numClients> as 1, which indicates that the tests are being exectuted by 1 remote clients.


``` xml
    <build>
        <plugins>
            <plugin>
                <groupId>org.openclover</groupId>
                <artifactId>clover-maven-plugin</artifactId>
                <version>4.3.1</version>
                <configuration>
                    <singleCloverDatabase>true</singleCloverDatabase>
                    <cloverDatabase>${basedir}/../clover-db/clover.db</cloverDatabase>
                    <distributedCoverage>
                        <numClients>1</numClients>
                    </distributedCoverage>
                </configuration>
                <executions>
                    <execution>
                        <phase>process-sources</phase>
                        <goals>
                            <goal>setup</goal>
                        </goals>
                    </execution>
                    <execution>
                        <id>log</id>
                        <phase>verify</phase>
                        <goals>
                            <goal>log</goal>
                            <goal>check</goal>
                            <goal>clover</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
```

From this plugin, all the source code are instrumented and regeneraged. The regenerated source code can be found at "target/clover/src-instrumented". 

Example:

Original code segment:
``` java
    @GET
    @Path("/pets")
    public String getPets() {
        System.out.println("pets: dog, cat");
        return "pets: dog, cat";
    }
```

After instrumentation:
``` java
    @GET
    @Path("/pets")
    public String getPets() {try{__CLR4_3_122jqet7a02.R.inc(2);
        __CLR4_3_122jqet7a02.R.inc(3);System.out.println("pets: dog, cat");
        __CLR4_3_122jqet7a02.R.inc(4);return "pets: dog, cat";
    }finally{__CLR4_3_122jqet7a02.R.flushNeeded();}}

```


"clover-maven-plugin" is included in the build sections of the test module too. Additionally we need to specify `clover.server` system property as `true` in maven-surefire-plugin.

Also note that the <cloverDatabase> is pointing to the same location in both service and test module.



