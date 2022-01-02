package com.hoaxify.ws.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.hoaxify.ws.shared.GenericResponse;

@RestController
public class UserController {
	
	//dependency injection
	@Autowired
	UserService userService;

	@CrossOrigin
	@PostMapping("/api/1.0/users")
	@ResponseStatus(HttpStatus.CREATED)
	public GenericResponse createUser(@RequestBody User user) {
		userService.save(user);
		GenericResponse genericResponse = new GenericResponse("User Created!");
		return genericResponse;
	}
	
}
