// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "forge-std/Test.sol";

//import {console} from "forge-std/console.sol";

import {SomeNFT} from "../src/SomeNFT.sol";

contract NumberTest is Test {
    //Counter public counter;

    SomeNFT nft;

    function setUp() public {
        nft = new SomeNFT();
        nft.initialize();
    }

    function testName() public {
        assertEq(nft.name(), "SomeNFT");
    }
}
