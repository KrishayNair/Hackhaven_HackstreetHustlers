// import Head from "next/head";
// import Link from "next/link";
// import ComplaintReg from "/components/ComplaintReg";
// import Admin from "/components/Admin";
// import Button from "react-bootstrap/Button";
// import Header from "/components/Header";
// import Status from "/components/Status";
// import styles from "./index.module.css";
// import Features from "/components/features";
// // import FaqQuestions from "/components/faqQuestions";
// import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";

// export default function Home() {
//   const address = useAddress();

//   const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
//   const { data: officer } = useContractRead(contract, "officer");

//   return (
//     <div className={styles.mainContainer}>
//       <Head>
//         <title>Complaint App</title>
//         <meta name="description" content="This is a police complaint app" />
//         <link rel="icon" href="/logoTitle.png" />
//       </Head>
//       <Header />
//       <div className={styles.contentDiv}>
//         <div className={styles.tagline}>
//           <h2 className={styles.motto}>
//             "Secure, Transparent, and Accountable"
//           </h2>
//           <p className={styles.subHeading}>
//             A police complaint system for the 21st century. Making justice
//             accessible and transparent through the power of the blockchain.
//           </p>
//           <Link href="/Complaint">
//             <Button className={styles.contentBtn1} variant="light">
//               Register Complaint
//             </Button>
//           </Link>
//           <Link href="/StatusCheck">
//             <Button className={styles.contentBtn2} variant="light">
//               Check status
//             </Button>
//           </Link>
//         </div>
//         <img className={styles.mainImg} src="/mainImg2.png" alt="" />
//       </div>
//       <Features />
//       <div className={styles.faq}>
//         {/* <FaqQuestions /> */}
//       </div>
//       <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
//       <df-messenger
//         intent="WELCOME"
//         chat-title="ComplaintBot"
//         agent-id="facd2057-66f2-4b77-a3b1-4ab31f250072"
//         language-code="en"
//       ></df-messenger>
//     </div>
//   );
// }
import {
  AnonAadhaarProof,
  LogInWithAnonAadhaar,
  useAnonAadhaar,
} from "@anon-aadhaar/react";
import { useRouter } from 'next/navigation'
import { useEffect  } from "react";

type HomeProps = {
  setUseTestAadhaar: (state: boolean) => void;
  useTestAadhaar: boolean;
};

export default function Home({ setUseTestAadhaar, useTestAadhaar }: HomeProps) {
  // Use the Country Identity hook to get the status of the user.
  const router = useRouter()
  const [anonAadhaar] = useAnonAadhaar();

  useEffect(() => {
    console.log("Anon Aadhaar: ", anonAadhaar.status);
  }, [anonAadhaar]);

  useEffect(()=>{
    if (anonAadhaar?.status === "logged-in") {
      window.location.href="/About"
    }
  },[anonAadhaar])
  const switchAadhaar = () => {
    setUseTestAadhaar(!useTestAadhaar);
  };
 
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <main className="flex flex-col items-center gap-8 bg-white rounded-2xl max-w-screen-sm mx-auto h-[24rem] md:h-[20rem] p-8">
        <h1 className="font-bold text-2xl">Welcome to Anon Aadhaar Example</h1>
        <p>Prove your Identity anonymously using your Aadhaar card.</p>

        {/* Import the Connect Button component */}
        <LogInWithAnonAadhaar />

        {useTestAadhaar ? (
          <p>
            You&apos;re using the <strong> test </strong> Aadhaar mode
          </p>
        ) : (
          <p>
            You&apos;re using the <strong> real </strong> Aadhaar mode
          </p>
        )}
        <button
          onClick={switchAadhaar}
          type="button"
          className="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Switch for {useTestAadhaar ? "real" : "test"}
        </button>
      </main>
      <div className="flex flex-col items-center gap-4 rounded-2xl max-w-screen-sm mx-auto p-8">
        {/* Render the proof if generated and valid */}
        {/* {anonAadhaar?.status === "logged-in" && router.push('/About')
} */}
      </div>
    </div>
  );
}

