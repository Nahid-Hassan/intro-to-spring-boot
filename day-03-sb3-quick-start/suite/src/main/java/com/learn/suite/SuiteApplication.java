package com.learn.suite;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class SuiteApplication {

    @RestMapping("/hello")
    public String home() {
        return "Welcome to the home page!";
    }

    public static void main(String[] args) {
        SpringApplication.run(SuiteApplication.class, args);
    }
}
