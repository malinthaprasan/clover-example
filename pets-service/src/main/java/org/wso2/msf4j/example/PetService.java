/*
 * Copyright (c) 2016, WSO2 Inc. (http://wso2.com) All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.wso2.msf4j.example;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

/**
 * Pet service resource class.
 */
@Path("/info")
public class PetService {

    @GET
    @Path("/pets")
    public String getPets() {
        System.out.println("pets: dog, cat");
        return "pets: dog, cat";
    }

    @GET
    @Path("/pets/{name}")
    public String getPet(@PathParam("name") String name) {
        System.out.println("pet: " + name);
        return "pet: " + name;
    }

    @GET
    @Path("/pets/{name}/status")
    public String helloPet(@PathParam("name") String name) {
        System.out.println(name + " is sold");
        return name + " is sold";
    }
}
