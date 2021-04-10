pragma solidity ^0.6.6;

import "./MyToken.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TokenReceiver {
    IERC20 public token;
    
    function setToken(address _asset) public {
        token = IERC20(_asset);
    }

    function withdraw(uint _amount) public {
        token.transferFrom(msg.sender, address(this), _amount);
    }
}