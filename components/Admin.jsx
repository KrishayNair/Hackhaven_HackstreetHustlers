import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";

const Getter = () => {
    const [id, setId] = useState(0);
    const [rId, setRId] = useState(0);
    const [aRemark, setARemark] = useState("");
    const [rRemark, setRRemark] = useState("");
     
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
    const { data: pendingApprovals } = useContractRead(contract, "pendingApprovals", 0)
    const { data: pendingResolutions } = useContractRead(contract, "pendingResolutions", 0)
    const { mutateAsync: calcPendingApprovalIds } = useContractWrite(contract, "calcPendingApprovalIds")
    const { mutateAsync: calcPendingResolutionIds } = useContractWrite(contract, "calcPendingResolutionIds")

    const { mutateAsync: approveComplaint } = useContractWrite(contract, "approveComplaint")
    const { mutateAsync: resolveComplaint } = useContractWrite(contract, "resolveComplaint")
    const { mutateAsync: discardComplaint } = useContractWrite(contract, "discardComplaint")

    const getPendingApprovals = async () => {
        try {
            const data = await calcPendingApprovalIds([]);
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    const getPendingResolutions = async () => {
        try {
            const data = await calcPendingResolutionIds([]);
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    const handleApproveComplaint = async () => {
        try {
            const data = await approveComplaint([id, aRemark]);
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    const handleDeclineComplaint = async () => {
        try {
            const data = await discardComplaint([id, aRemark]);
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    const handleResolveComplaint = async () => {
        try {
            const data = await resolveComplaint([rId, rRemark]);
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    return (
        <div className='getter-container md:p-[30px]  md:m-5 xl:flex xl:flex-row'>
            <div className='getter-card md:m-5'>
                <p className='getter-card-title'>Pending Approvals</p>
                <div className='flex items-center mt-3'>
                   
                    <Button variant="light" className="mb-6" onClick={getPendingApprovals}>Next Pending Approval ID</Button>
                    {
                        pendingApprovals && (
                            <p className='getter-card-number'>: {pendingApprovals.toString()}</p>
                        )
                    }
                </div>

                <div className='md:flex items-center'>
                    <p className='text-2xl font-semibold'>Complaint Id: </p>
                    <input type="number" className='p-1 m-1 md:w-[500px] w-[200px] text-black rounded-sm bg-[#fff]' placeholder='Enter Id Here'
                        onChange={(e) => { setId(e.target.value) }} />
                </div>
                <div className='md:flex items-center'>
                    <p className='text-2xl font-semibold'>Your Remark: </p>
                    <input type="text" className='p-1 m-1 md:w-[500px] w-[200px] text-black rounded-sm bg-[#fff]' placeholder='Enter Remark Here'
                        onChange={(e) => { setARemark(e.target.value) }} />
                </div>
                <div className='flex'>
                    
                    <Button variant="light" onClick={handleApproveComplaint}>Approve Complaint</Button>
                    <Button variant="light" className='ml-10' onClick={handleDeclineComplaint}>Decline Complaint</Button>
                </div>

            </div>
            <div className='getter-card md:m-5'>
                <p className='getter-card-title'>Pending Resolutions</p>
                <div className='flex items-center mt-3'>
                    
                    <Button variant="light" className="mb-6" onClick={getPendingResolutions}>Next Pending Resolution ID</Button>
                    {
                        pendingResolutions && (
                            <p className='getter-card-number'>: {pendingResolutions.toString()}</p>
                        )
                    }

                </div>

                <div className='md:flex items-center'>
                    <p className='text-2xl font-semibold'>Complaint Id: </p>
                    <input type="number" className='getter-input  text-black md:w-[500px]' placeholder='Enter Id Here'
                        onChange={(e) => { setRId(e.target.value) }} />
                </div>
                <div className='md:flex items-center'>
                    <p className='text-2xl font-semibold'>Your Remark: </p>
                    <input type="text" className='getter-input text-black md:w-[500px]' placeholder='Enter Remark Here'
                        onChange={(e) => { setRRemark(e.target.value) }} />
                </div>
                <Button variant="light" className="mb-6" onClick={handleResolveComplaint}>Resolve Complaint</Button>
            </div>

        </div>
    )
}

export default Getter