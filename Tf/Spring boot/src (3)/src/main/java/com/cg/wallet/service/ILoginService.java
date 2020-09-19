
package com.cg.wallet.service;

import com.cg.wallet.entity.User;
import com.cg.wallet.exception.LoginException;

public interface ILoginService {
	
	public User doLogin(String userID, String password) throws LoginException;
	public String encryptUser(User user);
	

}
