// SPDX-LICENSE-IDENTIFIER: MIT

pragma solidity ^0.8.8;

contract Funder{
    uint public totalFunder;
    mapping(uint=>address) public funders;

    receive() external payable{}

    function transfer() external payable{
        funders[totalFunder]=msg.sender;
        totalFunder++;
    }

    function withdraw(uint _amount) external {
        require(_amount <= 2,"you cant withdraw more than 2 ether");
        payable(msg.sender).transfer(_amount);
    }
}