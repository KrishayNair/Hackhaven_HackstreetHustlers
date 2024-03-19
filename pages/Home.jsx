import Head from "next/head";
import Link from "next/link";
import ComplaintReg from "/components/ComplaintReg";
import Admin from "/components/Admin";
import Button from "react-bootstrap/Button";
import Header from "/components/Header";
import Status from "/components/Status";
import styles from "./index.module.css";
import Features from "/components/features";
// import FaqQuestions from "/components/faqQuestions";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";

export default function Home() {
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

  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Complaint App</title>
        <meta name="description" content="This is a police complaint app" />
        <link rel="icon" href="/logoTitle.png" />
      </Head>
      <Header />
      <div className={styles.contentDiv}>
        <div className={styles.tagline}>
          <h2 className={styles.motto}>
            "Secure, Transparent, and Accountable"
          </h2>
          <p className={styles.subHeading}>
            A police complaint system for the 21st century. Making justice
            accessible and transparent through the power of the blockchain.
          </p>
          <Link href="/Complaint">
            <Button className={styles.contentBtn1} variant="light">
              Register Complaint
            </Button>
          </Link>
          <Link href="/StatusCheck">
            <Button className={styles.contentBtn2} variant="light">
              Check status
            </Button>
          </Link>
        </div>
        <img className={styles.mainImg} src="/mainImg2.png" alt="" />
      </div>
      <Features />
      <div className={styles.faq}>
        {/* <FaqQuestions /> */}
      </div>
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      <df-messenger
        intent="WELCOME"
        chat-title="ComplaintBot"
        agent-id="facd2057-66f2-4b77-a3b1-4ab31f250072"
        language-code="en"
      ></df-messenger>
    </div>
  );
}