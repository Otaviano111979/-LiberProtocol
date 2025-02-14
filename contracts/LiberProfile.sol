// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract LiberProfile is ERC721 {
    mapping(uint256 => string) private _domains;
    uint256 private _tokenIdCounter;

    constructor() ERC721("LiberProfile", "LPF") {}

    function mintDomain(string memory domain) public {
        uint256 tokenId = _tokenIdCounter++;
        _domains[tokenId] = domain;
        _safeMint(msg.sender, tokenId);
    }

    function getDomain(uint256 tokenId) public view returns (string memory) {
        return _domains[tokenId];
    }
}
