// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "forge-std/Test.sol";

//import {console} from "forge-std/console.sol";

import {SomeNFT} from "../src/SomeNFT.sol";
import {UUPSProxy} from "../src/UpgradeUUPS.sol";

contract NumberTest is Test {
    //Counter public counter;

    SomeNFT implementationNftV1;
    UUPSProxy proxy;
    SomeNFT someNFT;

    function setUp() public {
        implementationNftV1 = new SomeNFT();
        proxy = new UUPSProxy(address(implementationNftV1), "");
        someNFT = SomeNFT(address(proxy));
        someNFT.initialize();
    }

    function testName() public {
        assertEq(someNFT.name(), "SomeNFT");
    }
}
