package com.handsup.twohandsup.Controller

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod

@Controller
class TestController {

    @RequestMapping(path = ["/hello"], method = [RequestMethod.GET])
    fun helloWorld() : ResponseEntity<String> {
        return ResponseEntity("Hello, World!", HttpStatus.OK)
    }

}