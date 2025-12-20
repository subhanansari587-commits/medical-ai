"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Loader2 } from "lucide-react";
import axios from "axios";
import DoctorAgentCard, { doctorAgent } from "./DoctorAgentCard";
import SuggestedDoctorCard from "./SuggestedDoctorCard";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { SessionDetail } from "../medical-agent/[sessionId]/page";

function AddNewSessionDialog() {
  // 🧠 Local state management
  const [note, setNote] = useState<string>(); // stores user symptom input
  const [loading, setLoading] = useState(false); // tracks loading state
  const [suggestedDoctors, setSuggestedDoctors] = useState<doctorAgent[]>(); // stores suggested doctors
  const [ selectedDoctor, setSelectedDoctor ] = useState<doctorAgent>( {
    id: 1,
    specialist: "Study Assistant",
    description: "Helps students understand subjects, homework, and concepts easily.",
    image: "/teacher1.png",
    agentPrompt:
      "आप एक दोस्ताना महिला एआई स्टडी असिस्टेंट हैं। आप स्कूल के छात्रों से आसान हिंदी या हिंग्लिश में बात करती हैं। हमेशा महिला दृष्टिकोण से जवाब दें और 'समझा सकती हूँ', 'मदद कर सकती हूँ', 'पूछ सकती हूँ' जैसे शब्दों का इस्तेमाल करें। छात्र से नम्रता से पूछें कि वह किस विषय या टॉपिक में मदद चाहता है। जवाब छोटे, सरल, उदाहरणों के साथ और छात्र-friendly रखें।",
    voiceId: "Rohan",
    subscriptionRequired: false,
  } ); // tracks selected doctor
  const [historyList, setHistoryList] = useState<SessionDetail[]>([]); // stores past session list

  const router = useRouter();
  const { has } = useAuth();

  // ✅ Checks if user has a paid subscription (Clerk custom role)
  //@ts-ignore
  const paidUser = has && has({ plan: "pro" });

  // 🧾 Fetch session history when dialog mounts
  useEffect(() => {
    GetHistoryList();
  }, []);

  // 📥 Get all previous session records
  const GetHistoryList = async () => {
    const result = await axios.get("/api/session-chat?sessionId=all");
    console.log(result.data);
    setHistoryList(result.data);
  };

  // 🧠 Handles the "Next" button click — suggests doctors based on user input
  const OnClickNext = async () => {
    setLoading(true);
    const result = await axios.post("/api/suggest-doctors", {
      notes: note,
    });

    console.log(result.data);
    setSuggestedDoctors(result.data);
    setLoading(false);
  };

  // 🩺 Handles "Start Consultation" button — saves session and redirects
  const onStartConsultation = async () => {
    setLoading(true);
    const result = await axios.post("/api/session-chat", {
      notes: note,
      selectedDoctor: selectedDoctor,
    });

    console.log(result.data);
    if (result.data?.sessionId) {
      // 🔁 Redirect to the new session page
      router.push("/dashboard/medical-agent/" + result.data.sessionId);
    }
    setLoading(false);
  };

  return (
    <Dialog>
      {/* 🔘 Open Dialog Button */}
      <DialogTrigger>
        <Button
          className="mt-3"
          disabled={!paidUser && historyList?.length >= 1} // restrict for free users
        >
          + Start Training
        </Button>
      </DialogTrigger>

      {/* 🗂️ Dialog Content */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Training Details</DialogTitle>
          <DialogDescription asChild>
            {/* Step 1: Enter Symptoms */}
            <div>
              <h2>Enter the details for this training session</h2>
              <Textarea
                placeholder="Add Detail here..."
                className="h-[200px] mt-1"
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </DialogDescription>
        </DialogHeader>

        {/* ✅ Dialog Footer with Buttons */}
        <DialogFooter>
          {/* Cancel Button */}
          <DialogClose>
            <Button variant={"outline"}>Cancel</Button>
          </DialogClose>

          {/* Next or Start Button depending on the step */}

          <Button
            disabled={loading || !selectedDoctor}
            onClick={() => onStartConsultation()}
          >
            Start Training{" "}
            {loading ? <Loader2 className="animate-spin" /> : <ArrowRight />}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddNewSessionDialog;
