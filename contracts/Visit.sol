pragma solidity ^0.4.24;
//pragma experimental ABIEncoderV2;

contract Visit {
    struct Member{
        uint count;
    }
    mapping(address => Member) member_map;
    address[] members;
    
    function getTotalCount() public returns (uint){
        return members.length;
    }

    function getMemberInfo(address sender) public returns (uint){
        Member memory m = member_map[sender];
        return m.count;
    }

   function visit() public{

       if(member_map[msg.sender].count > 0){
           member_map[msg.sender].count += 1;
       }else{
       members.push(msg.sender);
       Member memory m;
       m.count = 1;
       member_map[msg.sender] = m;
       }
   }
}