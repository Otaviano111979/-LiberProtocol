// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract LiberDAO {
    struct Proposal {
        string description;
        uint256 votesFor;
        uint256 votesAgainst;
    }

    Proposal[] public proposals;
    mapping(address => bool) public voters;

    function createProposal(string memory description) public {
        proposals.push(Proposal(description, 0, 0));
    }

    function vote(uint256 proposalId, bool support) public {
        require(!voters[msg.sender], "Already voted");
        voters[msg.sender] = true;

        if (support) {
            proposals[proposalId].votesFor++;
        } else {
            proposals[proposalId].votesAgainst++;
        }
    }
}
