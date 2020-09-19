package com.cg.wallet;

import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cg.wallet.dto.TransferFundDto;
import com.cg.wallet.exception.WalletNotFoundException;
import com.cg.wallet.exception.BalanceException;
import com.cg.wallet.exception.TransactionException;
import com.cg.wallet.service.TransferFundService;
@SpringBootTest
class PaymentWalletApplicationTests {

	@Autowired
	private TransferFundService service;
	
	
	
	@Test
	public void testTransferFund1() throws WalletNotFoundException, BalanceException, TransactionException 
	{
		TransferFundDto transfer= new TransferFundDto();
		
		transfer.setFromWalletId("9473869541");
		transfer.setToWalletId("9473869542");
		transfer.setAmount(1000);
		
		String result= service.transferFund(transfer);
		Assertions.assertEquals("Amount Transfered Successfully",result);
	}
	
	@Test
	public void testTransferFund2() throws WalletNotFoundException, BalanceException, TransactionException 
	{
		TransferFundDto transfer= new TransferFundDto();
		
		transfer.setFromWalletId("9473869541");
		transfer.setToWalletId("9473869548");
		transfer.setAmount(1000);
		
		assertThrows(WalletNotFoundException.class, ()->service.transferFund(transfer));
	}
	

}
