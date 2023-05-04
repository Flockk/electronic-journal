package com.flock.journal.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
    info = @Info(
        contact = @Contact(
            name = "Maxim",
            email = "maxim.elushev@yandex.ru",
            url = "https://github.com/Flockk"
        ),
        description = "Application for managing student grades and assignments",
        title = "Electronic journal OpenApi specification"
    ),
    servers = {
        @Server(
            description = "Local ENV",
            url = "http://localhost:8080"
        ),
    }
)
public class OpenApiConfig {

}
