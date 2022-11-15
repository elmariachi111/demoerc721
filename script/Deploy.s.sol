// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import {SomeNFT} from "../src/SomeNFT.sol";

contract DeployScript is Script {
    function run() public {
        vm.startBroadcast();
        new SomeNFT();
        vm.stopBroadcast();
    }
}
