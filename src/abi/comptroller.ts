export const COMPTROLLER_ABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "pendingAdmin",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x26782247"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "newPendingAdmin",
                "type": "address"
            }
        ],
        "name": "_setPendingAdmin",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xb71d1a0c"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "comptrollerImplementation",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xbb82aa5e"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "_acceptImplementation",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xc1e80334"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "pendingComptrollerImplementation",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xdcfbc0c7"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "newPendingImplementation",
                "type": "address"
            }
        ],
        "name": "_setPendingImplementation",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xe992a041"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "_acceptAdmin",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xe9c714f2"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "admin",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xf851a440"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor",
        "signature": "constructor"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "oldPendingImplementation",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "newPendingImplementation",
                "type": "address"
            }
        ],
        "name": "NewPendingImplementation",
        "type": "event",
        "signature": "0xe945ccee5d701fc83f9b8aa8ca94ea4219ec1fcbd4f4cab4f0ea57c5c3e1d815"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "oldImplementation",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "newImplementation",
                "type": "address"
            }
        ],
        "name": "NewImplementation",
        "type": "event",
        "signature": "0xd604de94d45953f9138079ec1b82d533cb2160c906d1076d1f7ed54befbca97a"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "oldPendingAdmin",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "newPendingAdmin",
                "type": "address"
            }
        ],
        "name": "NewPendingAdmin",
        "type": "event",
        "signature": "0xca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a9"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "oldAdmin",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "newAdmin",
                "type": "address"
            }
        ],
        "name": "NewAdmin",
        "type": "event",
        "signature": "0xf9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "error",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "info",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "detail",
                "type": "uint256"
            }
        ],
        "name": "Failure",
        "type": "event",
        "signature": "0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "contributor",
                "type": "address"
            }
        ],
        "name": "updateContributorRewards",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x741b2525"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor",
        "signature": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "action",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "pauseState",
                "type": "bool"
            }
        ],
        "name": "ActionPaused",
        "type": "event",
        "signature": "0xef159d9a32b2472e32b098f954f3ce62d232939f1c207070b584df1814de2de0"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "contract CToken",
                "name": "cToken",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "action",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "pauseState",
                "type": "bool"
            }
        ],
        "name": "ActionPaused",
        "type": "event",
        "signature": "0x71aec636243f9709bb0007ae15e9afb8150ab01716d75fd7573be5cc096e03b0"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "oldCompAccrued",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newCompAccrued",
                "type": "uint256"
            }
        ],
        "name": "CompAccruedAdjusted",
        "type": "event",
        "signature": "0x4a5c134e28b537a76546993ea37f3b60d9190476df7356d3842aa40902e20f04"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract CToken",
                "name": "cToken",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newSpeed",
                "type": "uint256"
            }
        ],
        "name": "CompBorrowSpeedUpdated",
        "type": "event",
        "signature": "0x20af8e791cc98f74b2d7a391c80980ca8e5aebf3d4060bf581997b6acae2e537"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "CompGranted",
        "type": "event",
        "signature": "0x98b2f82a3a07f223a0be64b3d0f47711c64dccd1feafb94aa28156b38cd9695c"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "oldCompReceivable",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newCompReceivable",
                "type": "uint256"
            }
        ],
        "name": "CompReceivableUpdated",
        "type": "event",
        "signature": "0x17fea09d9a7ca41b2f9f9118f18f44848a62e9c70d55dd4385131eb2cf1b7e47"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract CToken",
                "name": "cToken",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newSpeed",
                "type": "uint256"
            }
        ],
        "name": "CompSupplySpeedUpdated",
        "type": "event",
        "signature": "0xdeafccd0c0b768b2529f7dcbbe58e155d6023059150b7490ed4535cc3744b92d"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "contributor",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newSpeed",
                "type": "uint256"
            }
        ],
        "name": "ContributorCompSpeedUpdated",
        "type": "event",
        "signature": "0x386537fa92edc3319af95f1f904dcf1900021e4f3f4e08169a577a09076e66b3"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract CToken",
                "name": "cToken",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "borrower",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "compDelta",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "compBorrowIndex",
                "type": "uint256"
            }
        ],
        "name": "DistributedBorrowerComp",
        "type": "event",
        "signature": "0x1fc3ecc087d8d2d15e23d0032af5a47059c3892d003d8e139fdcb6bb327c99a6"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract CToken",
                "name": "cToken",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "supplier",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "compDelta",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "compSupplyIndex",
                "type": "uint256"
            }
        ],
        "name": "DistributedSupplierComp",
        "type": "event",
        "signature": "0x2caecd17d02f56fa897705dcc740da2d237c373f70686f4e0d9bd3bf0400ea7a"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "error",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "info",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "detail",
                "type": "uint256"
            }
        ],
        "name": "Failure",
        "type": "event",
        "signature": "0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "contract CToken",
                "name": "cToken",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "MarketEntered",
        "type": "event",
        "signature": "0x3ab23ab0d51cccc0c3085aec51f99228625aa1a922b3a8ca89a26b0f2027a1a5"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "contract CToken",
                "name": "cToken",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "MarketExited",
        "type": "event",
        "signature": "0xe699a64c18b07ac5b7301aa273f36a2287239eb9501d81950672794afba29a0d"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "contract CToken",
                "name": "cToken",
                "type": "address"
            }
        ],
        "name": "MarketListed",
        "type": "event",
        "signature": "0xcf583bb0c569eb967f806b11601c4cb93c10310485c67add5f8362c2f212321f"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract CToken",
                "name": "cToken",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newBorrowCap",
                "type": "uint256"
            }
        ],
        "name": "NewBorrowCap",
        "type": "event",
        "signature": "0x6f1951b2aad10f3fc81b86d91105b413a5b3f847a34bbc5ce1904201b14438f6"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "oldBorrowCapGuardian",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "newBorrowCapGuardian",
                "type": "address"
            }
        ],
        "name": "NewBorrowCapGuardian",
        "type": "event",
        "signature": "0xeda98690e518e9a05f8ec6837663e188211b2da8f4906648b323f2c1d4434e29"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "oldCloseFactorMantissa",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newCloseFactorMantissa",
                "type": "uint256"
            }
        ],
        "name": "NewCloseFactor",
        "type": "event",
        "signature": "0x3b9670cf975d26958e754b57098eaa2ac914d8d2a31b83257997b9f346110fd9"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "contract CToken",
                "name": "cToken",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "oldCollateralFactorMantissa",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newCollateralFactorMantissa",
                "type": "uint256"
            }
        ],
        "name": "NewCollateralFactor",
        "type": "event",
        "signature": "0x70483e6592cd5182d45ac970e05bc62cdcc90e9d8ef2c2dbe686cf383bcd7fc5"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "oldLiquidationIncentiveMantissa",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newLiquidationIncentiveMantissa",
                "type": "uint256"
            }
        ],
        "name": "NewLiquidationIncentive",
        "type": "event",
        "signature": "0xaeba5a6c40a8ac138134bff1aaa65debf25971188a58804bad717f82f0ec1316"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "oldPauseGuardian",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "newPauseGuardian",
                "type": "address"
            }
        ],
        "name": "NewPauseGuardian",
        "type": "event",
        "signature": "0x0613b6ee6a04f0d09f390e4d9318894b9f6ac7fd83897cd8d18896ba579c401e"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "contract PriceOracle",
                "name": "oldPriceOracle",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "contract PriceOracle",
                "name": "newPriceOracle",
                "type": "address"
            }
        ],
        "name": "NewPriceOracle",
        "type": "event",
        "signature": "0xd52b2b9b7e9ee655fcb95d2e5b9e0c9f69e7ef2b8e9d2d0ea78402d576d22e22"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "contract Unitroller",
                "name": "unitroller",
                "type": "address"
            }
        ],
        "name": "_become",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x1d504dc6"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "_borrowGuardianPaused",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xe6653f3d"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "_grantComp",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x27efe3cb"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "_mintGuardianPaused",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x3c94786f"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "newBorrowCapGuardian",
                "type": "address"
            }
        ],
        "name": "_setBorrowCapGuardian",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x391957d7"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "contract CToken",
                "name": "cToken",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "state",
                "type": "bool"
            }
        ],
        "name": "_setBorrowPaused",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x18c882a5"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "newCloseFactorMantissa",
                "type": "uint256"
            }
        ],
        "name": "_setCloseFactor",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x317b0b77"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "contract CToken",
                "name": "cToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "newCollateralFactorMantissa",
                "type": "uint256"
            }
        ],
        "name": "_setCollateralFactor",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xe4028eee"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "contract CToken[]",
                "name": "cTokens",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "supplySpeeds",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "borrowSpeeds",
                "type": "uint256[]"
            }
        ],
        "name": "_setCompSpeeds",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xa8b43948"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "contributor",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "compSpeed",
                "type": "uint256"
            }
        ],
        "name": "_setContributorCompSpeed",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x598ee1cb"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "newLiquidationIncentiveMantissa",
                "type": "uint256"
            }
        ],
        "name": "_setLiquidationIncentive",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x4fd42e17"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "contract CToken[]",
                "name": "cTokens",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "newBorrowCaps",
                "type": "uint256[]"
            }
        ],
        "name": "_setMarketBorrowCaps",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x607ef6c1"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "contract CToken",
                "name": "cToken",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "state",
                "type": "bool"
            }
        ],
        "name": "_setMintPaused",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x3bcf7ec1"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "newPauseGuardian",
                "type": "address"
            }
        ],
        "name": "_setPauseGuardian",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x5f5af1aa"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "contract PriceOracle",
                "name": "newOracle",
                "type": "address"
            }
        ],
        "name": "_setPriceOracle",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x55ee1fe1"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "bool",
                "name": "state",
                "type": "bool"
            }
        ],
        "name": "_setSeizePaused",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x2d70db78"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "bool",
                "name": "state",
                "type": "bool"
            }
        ],
        "name": "_setTransferPaused",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x8ebf6364"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "contract CToken",
                "name": "cToken",
                "type": "address"
            }
        ],
        "name": "_supportMarket",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xa76b3fda"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "accountAssets",
        "outputs": [
            {
                "internalType": "contract CToken",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xdce15449"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "admin",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xf851a440"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "allMarkets",
        "outputs": [
            {
                "internalType": "contract CToken",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x52d84d1e"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "cToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "borrower",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "borrowAmount",
                "type": "uint256"
            }
        ],
        "name": "borrowAllowed",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xda3d454c"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "borrowCapGuardian",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x21af4569"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "borrowCaps",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x4a584432"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "borrowGuardianPaused",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x6d154ea5"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "cToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "borrower",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "borrowAmount",
                "type": "uint256"
            }
        ],
        "name": "borrowVerify",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x5c778605"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "contract CToken",
                "name": "cToken",
                "type": "address"
            }
        ],
        "name": "checkMembership",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x929fe9a1"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "holder",
                "type": "address"
            },
            {
                "internalType": "contract CToken[]",
                "name": "cTokens",
                "type": "address[]"
            }
        ],
        "name": "claimComp",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x1c3db2e0"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address[]",
                "name": "holders",
                "type": "address[]"
            },
            {
                "internalType": "contract CToken[]",
                "name": "cTokens",
                "type": "address[]"
            },
            {
                "internalType": "bool",
                "name": "borrowers",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "suppliers",
                "type": "bool"
            }
        ],
        "name": "claimComp",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x6810dfa6"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "holder",
                "type": "address"
            }
        ],
        "name": "claimComp",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xe9af0292"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "closeFactorMantissa",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xe8755446"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "compAccrued",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xcc7ebdc4"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "compBorrowSpeeds",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xf4a433c0"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "compBorrowState",
        "outputs": [
            {
                "internalType": "uint224",
                "name": "index",
                "type": "uint224"
            },
            {
                "internalType": "uint32",
                "name": "block",
                "type": "uint32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x8c57804e"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "compBorrowerIndex",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xca0af043"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "compContributorSpeeds",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x986ab838"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "compInitialIndex",
        "outputs": [
            {
                "internalType": "uint224",
                "name": "",
                "type": "uint224"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xa7f0e231"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "compRate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xaa900754"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "compReceivable",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x85b7beb8"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "compSpeeds",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x1d7b33d7"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "compSupplierIndex",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xb21be7fd"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "compSupplySpeeds",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x6aa875b5"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "compSupplyState",
        "outputs": [
            {
                "internalType": "uint224",
                "name": "index",
                "type": "uint224"
            },
            {
                "internalType": "uint32",
                "name": "block",
                "type": "uint32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x6b79c38d"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "comptrollerImplementation",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xbb82aa5e"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address[]",
                "name": "cTokens",
                "type": "address[]"
            }
        ],
        "name": "enterMarkets",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xc2998238"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "cTokenAddress",
                "type": "address"
            }
        ],
        "name": "exitMarket",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xede4edd0"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address[]",
                "name": "affectedUsers",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            }
        ],
        "name": "fixBadAccruals",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x16b95e8f"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "getAccountLiquidity",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x5ec88c79"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getAllMarkets",
        "outputs": [
            {
                "internalType": "contract CToken[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xb0772d0b"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "getAssetsIn",
        "outputs": [
            {
                "internalType": "contract CToken[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xabfceffc"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getBlockNumber",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x42cbb15c"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getCompAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x9d1b5a0a"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "cTokenModify",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "redeemTokens",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "borrowAmount",
                "type": "uint256"
            }
        ],
        "name": "getHypotheticalAccountLiquidity",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x4e79238f"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "isComptroller",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x007e3dd2"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "contract CToken",
                "name": "cToken",
                "type": "address"
            }
        ],
        "name": "isDeprecated",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x94543c15"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "lastContributorBlock",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xbea6b8b8"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "cTokenBorrowed",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "cTokenCollateral",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "liquidator",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "borrower",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "repayAmount",
                "type": "uint256"
            }
        ],
        "name": "liquidateBorrowAllowed",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x5fc7e71e"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "cTokenBorrowed",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "cTokenCollateral",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "liquidator",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "borrower",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "actualRepayAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "seizeTokens",
                "type": "uint256"
            }
        ],
        "name": "liquidateBorrowVerify",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x47ef3b3b"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "cTokenBorrowed",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "cTokenCollateral",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "actualRepayAmount",
                "type": "uint256"
            }
        ],
        "name": "liquidateCalculateSeizeTokens",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xc488847b"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "liquidationIncentiveMantissa",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x4ada90af"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "markets",
        "outputs": [
            {
                "internalType": "bool",
                "name": "isListed",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "collateralFactorMantissa",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "isComped",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x8e8f294b"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "maxAssets",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x94b2294b"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "cToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "minter",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "mintAmount",
                "type": "uint256"
            }
        ],
        "name": "mintAllowed",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x4ef4c3e1"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "mintGuardianPaused",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x731f0c2b"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "cToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "minter",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "actualMintAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "mintTokens",
                "type": "uint256"
            }
        ],
        "name": "mintVerify",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x41c728b9"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "oracle",
        "outputs": [
            {
                "internalType": "contract PriceOracle",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x7dc0d1d0"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "pauseGuardian",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x24a3d622"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "pendingAdmin",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x26782247"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "pendingComptrollerImplementation",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xdcfbc0c7"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "proposal65FixExecuted",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xf00a7a92"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "cToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "redeemer",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "redeemTokens",
                "type": "uint256"
            }
        ],
        "name": "redeemAllowed",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xeabe7d91"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "cToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "redeemer",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "redeemAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "redeemTokens",
                "type": "uint256"
            }
        ],
        "name": "redeemVerify",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x51dff989"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "cToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "payer",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "borrower",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "repayAmount",
                "type": "uint256"
            }
        ],
        "name": "repayBorrowAllowed",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x24008a62"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "cToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "payer",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "borrower",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "actualRepayAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "borrowerIndex",
                "type": "uint256"
            }
        ],
        "name": "repayBorrowVerify",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x1ededc91"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "cTokenCollateral",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "cTokenBorrowed",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "liquidator",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "borrower",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "seizeTokens",
                "type": "uint256"
            }
        ],
        "name": "seizeAllowed",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xd02f7351"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "seizeGuardianPaused",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xac0b0bb7"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "cTokenCollateral",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "cTokenBorrowed",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "liquidator",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "borrower",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "seizeTokens",
                "type": "uint256"
            }
        ],
        "name": "seizeVerify",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x6d35bf91"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "cToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "src",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "dst",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "transferTokens",
                "type": "uint256"
            }
        ],
        "name": "transferAllowed",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xbdcdc258"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "transferGuardianPaused",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x87f76303"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "cToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "src",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "dst",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "transferTokens",
                "type": "uint256"
            }
        ],
        "name": "transferVerify",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x6a56947e"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "contributor",
                "type": "address"
            }
        ],
        "name": "updateContributorRewards",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x741b2525"
    }
];
