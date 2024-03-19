import React from 'react'
import Status from '/components/Status'
import Admin from "/components/Admin"
import Header from '/components/Header';
import styles from "./StatusCheck.module.css"
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import Head from 'next/head';
function StatusCheck() {
  const address = useAddress();

 
  const contractABI = [
    {
      type: "constructor",
      name: "",
      inputs: [
        {
          type: "address",
          name: "_officer",
          internalType: "address",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "event",
      name: "complaintFiled",
      inputs: [
        {
          type: "uint256",
          name: "id",
          indexed: false,
          internalType: "uint256",
        },
        {
          type: "address",
          name: "complaintRegisteredBy",
          indexed: false,
          internalType: "address",
        },
        {
          type: "string",
          name: "title",
          indexed: false,
          internalType: "string",
        },
      ],
      outputs: [],
      anonymous: false,
    },
    {
      type: "function",
      name: "Complaints",
      inputs: [
        {
          type: "uint256",
          name: "",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          type: "uint256",
          name: "id",
          internalType: "uint256",
        },
        {
          type: "address",
          name: "complaintRegisteredBy",
          internalType: "address",
        },
        {
          type: "string",
          name: "title",
          internalType: "string",
        },
        {
          type: "string",
          name: "description",
          internalType: "string",
        },
        {
          type: "string",
          name: "approvalRemark",
          internalType: "string",
        },
        {
          type: "string",
          name: "resolutionRemark",
          internalType: "string",
        },
        {
          type: "bool",
          name: "isApproved",
          internalType: "bool",
        },
        {
          type: "bool",
          name: "isResolved",
          internalType: "bool",
        },
        {
          type: "bool",
          name: "exists",
          internalType: "bool",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "approveComplaint",
      inputs: [
        {
          type: "uint256",
          name: "_id",
          internalType: "uint256",
        },
        {
          type: "string",
          name: "_approvalRemark",
          internalType: "string",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "calcPendingApprovalIds",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "calcPendingResolutionIds",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "calcResolvedIds",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "complainer",
      inputs: [],
      outputs: [
        {
          type: "address",
          name: "",
          internalType: "address",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "discardComplaint",
      inputs: [
        {
          type: "uint256",
          name: "_id",
          internalType: "uint256",
        },
        {
          type: "string",
          name: "_approvalRemark",
          internalType: "string",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "fileComplaint",
      inputs: [
        {
          type: "string",
          name: "_title",
          internalType: "string",
        },
        {
          type: "string",
          name: "_description",
          internalType: "string",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "nextId",
      inputs: [],
      outputs: [
        {
          type: "uint256",
          name: "",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "officer",
      inputs: [],
      outputs: [
        {
          type: "address",
          name: "",
          internalType: "address",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "pendingApprovals",
      inputs: [
        {
          type: "uint256",
          name: "",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          type: "uint256",
          name: "",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "pendingResolutions",
      inputs: [
        {
          type: "uint256",
          name: "",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          type: "uint256",
          name: "",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "resolveComplaint",
      inputs: [
        {
          type: "uint256",
          name: "_id",
          internalType: "uint256",
        },
        {
          type: "string",
          name: "_resolutionRemark",
          internalType: "string",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "setOfficerAddress",
      inputs: [
        {
          type: "address",
          name: "_officer",
          internalType: "address",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "solvedCases",
      inputs: [
        {
          type: "uint256",
          name: "",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          type: "uint256",
          name: "",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
  ];
  const { contract } = useContract("0xd264861C7D11F7C0A627224e23c50dB1ca341508", contractABI);
  const { data: officer } = useContractRead(contract, "officer");
console.log(officer)
  return (
    <div className={styles.mainDiv}>
      <Header/>
      <Status/>
      <Admin />
    </div>
  )
}

export default StatusCheck
