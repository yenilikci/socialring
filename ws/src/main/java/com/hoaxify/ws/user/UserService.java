package com.hoaxify.ws.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	UserRepository userRepository;
	
	//constructor injection
	//@Autowired - one constructor/non required
	public UserService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	public void save(User user) {
		userRepository.save(user);
	}

	
}
