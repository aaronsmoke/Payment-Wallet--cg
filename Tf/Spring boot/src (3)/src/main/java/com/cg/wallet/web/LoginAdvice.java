package com.cg.wallet.web;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.cg.wallet.dto.ErrorInfo;
import com.cg.wallet.exception.LoginException;

@RestControllerAdvice

public class LoginAdvice {
	@ExceptionHandler
	@ResponseStatus(code=HttpStatus.FORBIDDEN)
	public ErrorInfo handleLoginException(LoginException ex) {
		
		return new ErrorInfo(HttpStatus.FORBIDDEN.toString(),ex.getMessage());
		
	}
}
