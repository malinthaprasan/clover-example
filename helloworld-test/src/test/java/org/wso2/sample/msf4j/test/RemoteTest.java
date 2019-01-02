package org.wso2.sample.msf4j.test;

import junit.framework.TestCase;
import net.sourceforge.jwebunit.junit.WebTester;

/**
 */
public class RemoteTest extends TestCase {


    private WebTester tester;

    public RemoteTest(String name) {
        super(name);
        tester = new WebTester();
    }

    public void testGetPets() {
        final String url = "http://localhost:9090/info";
        System.out.println("TESTING REMOTE URL = " + url);
        tester.getTestContext().setBaseUrl(url);
        tester.beginAt("/pets");
        tester.assertMatch("pets:");
    }

    public void testGetPet() {
        final String url = "http://localhost:9090/info";
        System.out.println("TESTING REMOTE URL = " + url);
        tester.getTestContext().setBaseUrl(url);
        tester.beginAt("/pets/dog");
        tester.assertMatch("pet:");
    }

    public void testGetPetAndStatus() {
        final String url = "http://localhost:9090/info";
        System.out.println("TESTING REMOTE URL = " + url);
        tester.getTestContext().setBaseUrl(url);
        tester.beginAt("/pets/dog");
        tester.assertMatch("pet:");

        tester.getTestContext().setBaseUrl(url);
        tester.beginAt("/pets/dog/status");
        tester.assertMatch("is sold");
    }
}
