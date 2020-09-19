package com.cg.wallet.service;

import java.time.LocalDate;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cg.wallet.dao.WalletAccountDao;
import com.cg.wallet.dao.WalletBankDao;
import com.cg.wallet.dto.AccountForm;
import com.cg.wallet.dto.UserDto;
import com.cg.wallet.entity.WalletAccount;
import com.cg.wallet.entity.WalletBank;
import com.cg.wallet.exception.BankAccountException;
import com.cg.wallet.exception.WalletAccountExistsException;
import com.cg.wallet.util.WalletConstants;

@Service
public class AddWalletServiceImpl implements IAddWalletService{

	@Autowired
	private WalletAccountDao accountDao;
	@Autowired
	private WalletBankDao bankDao;
	
	//Add new wallet account
	@Override
	@Transactional
	public String addNewWalletAccount(UserDto userDto) throws WalletAccountExistsException {
		 Optional<WalletAccount> optAccount = accountDao.findById(userDto.getPhoneNo());
		 if (optAccount.isPresent())
			 throw new WalletAccountExistsException(WalletConstants.PHONE_NO_ALREADY_EXISTS);
		WalletAccount account = new WalletAccount();
		account.setPhoneNo(userDto.getPhoneNo());
		account.setUserName(userDto.getUserName());
		account.setPassword(userDto.getPassword());
		account.setBalance(userDto.getBalance());
		account.setRole(WalletConstants.USER_ROLE);
		account.setStatus(WalletConstants.ACTIVE_USER);
		account.setAccCreatedDt(LocalDate.now());
		accountDao.save(account);
		return WalletConstants.WALLET_ACCOUNT_CREATED;
	}
	//Add new bank account to wallet
	@Override
	public String addBankAccount(AccountForm form) throws BankAccountException, WalletAccountExistsException {
		WalletBank bank = new WalletBank();
		Optional<WalletBank> opt = bankDao.findById(form.getAccountId());
		if(opt.isPresent()) {
			throw new BankAccountException(WalletConstants.BANK_ACCOUNT_EXISTS);
		}
		Optional<WalletAccount> optAccount = accountDao.findById(form.getPhoneNo());
		 if (!optAccount.isPresent())
			 throw new WalletAccountExistsException(WalletConstants.INVALID_WALLET);
		bank.setAccountId(form.getAccountId());
		bank.setBankName(form.getBankName());
		bank.setPhoneNo(form.getPhoneNo());
		bankDao.save(bank);
		return WalletConstants.BANK_ACCOUNT_ADDED;
	}
	
	
	
}
