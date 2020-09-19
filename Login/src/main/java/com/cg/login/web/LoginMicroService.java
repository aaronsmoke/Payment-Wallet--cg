package com.cg.login.web;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cg.login.entity.User;
import com.cg.login.exception.LoginException;
import com.cg.login.service.ILoginService;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})

public class LoginMicroService {
	@Autowired
	private ILoginService ser;
	Logger logger = LoggerFactory.getLogger(LoginMicroService.class);
	private Map<String, User> authMap = new HashMap<>();
	
	//Login
	@PostMapping(value = "/login")
	public String getLogin(@RequestParam("userid")String userID,
			@RequestParam("password") String password) throws LoginException{
		
		logger.info("userID" + userID);
		logger.debug("user id received");
		User user = ser.doLogin(userID, password);
		String token = ser.encryptUser(user);
		authMap.put(token, user);
		return token;
	}
	//Verify Login
	@PostMapping(value = "/verifylogin")
	public String verifyLogin(@RequestBody String tokenId) throws LoginException{
		
		logger.info("token id" + tokenId);
		String role = null;
		User user = null;
		logger.info("auth " + authMap.containsKey(tokenId));
		if(authMap.containsKey(tokenId)) {
			user = authMap.get(tokenId);
			logger.info(user.getUserName()+ " " + user.getRole());
			return user.getRole();
		}
		return role;
		}
	
	//Logout
	@GetMapping(value = "/logout")
	public String logout(@RequestHeader("tokenId") String token,HttpServletRequest req) {
		authMap.remove(token);
		return "logged out";
	}
	

	
	

}

