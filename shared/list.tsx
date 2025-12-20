export const AIDoctorAgents = [
    {
        id: 1,
        specialist: "Gen Physician",
        description: "Helps with everyday health concerns and common symptoms.",
        image: "/doctor4.png",
        agentPrompt:
            "Namaste! Aaj hum ek important General Physician topic par training karenge. mai aapse medical question-answer aur clinical interview style questions poochungi. Agar kisi jagah aapko answer clear na ho, so no problem main concept ko simple Hindi and English mai explain karungi. Aap apne doubts bhi pooch sakte hain. Chaliye shuru karte hain.",
        voiceId: "Rohan",
        gender: "female" as const,
        subscriptionRequired: false,
    },

    {
        id: 2,
        specialist: "Pediatrician",
        description: "Expert in children's health, from babies to teens.",
        image: "/doctor2.png",
        agentPrompt:
            "Namaste! Aaj hum Pediatric Medicine ke important topics par training karenge. Main aapse bachchon ki health se related questions poochunga, oral question-answer aur clinical case discussion style mai. Agar aapko kisi concept mai confusion ho, main simple Hindi and English mai clearly samjhaunga. Aap freely apne doubts bhi pooch sakte hain. Chaliye start karte hain.",
        voiceId: "chris",
        gender: "male" as const,
        subscriptionRequired: true,
    },

    {
        id: 3,
        specialist: "Dermatologist",
        description: "Handles skin issues like rashes, acne, or infections.",
        image: "/doctor3.png",
        agentPrompt:
            "Namaste! Aaj hum Dermatology ke common aur important topics par training karenge. Main aapse skin conditions ko lekar short clinical questions poochunga, jaise oral question-answer mai hota hai. Agar aapko answer ya concept clear na ho, koi problem nahi — main easy Hindi and English mai samjhaunga. Aap apne doubts bhi pooch sakte hain. Chaliye shuru karein.",
        voiceId: "sarge",
        gender: "male" as const,
        subscriptionRequired: true,
    },

    {
        id: 4,
        specialist: "Psychologist",
        description: "Supports mental health and emotional well-being.",
        image: "/doctor1.png",
        agentPrompt:
            "Namaste! Aaj hum Psychology aur Mental Health ke important concepts par training karenge. Main aapse interview aur case-based questions poochunga, jaise exams aur practicals mai aate hain. Agar kisi topic mai clarity na ho, main calmly Hindi and English mai samjhaunga. Aap apne doubts ya questions zaroor pooch sakte hain. Chaliye start karte hain.",
        voiceId: "susan",
        gender: "male" as const,
        subscriptionRequired: true,
    },

    {
        id: 5,
        specialist: "Nutritionist",
        description: "Provides advice on healthy eating and weight management.",
        image: "/doctor5.png",
        agentPrompt:
            "Namaste! Aaj hum Nutrition aur Dietetics ke important topics par training karenge. Main aapse nutrition-related questions poochungi, oral question-answer aur practical approach ke saath. Agar aapko kisi diet concept ya logic mai doubt ho, main simple Hindi and English mai explain karungi. Aap apne questions bhi pooch sakte hain. Chaliye shuru karte hain.",
        voiceId: "eileen",
        gender: "female" as const,
        subscriptionRequired: true,
    },

    {
        id: 6,
        specialist: "Cardiologist",
        description: "Focuses on heart health and blood pressure issues.",
        image: "/doctor6.png",
        agentPrompt:
            "Namaste! Aaj hum Cardiology ke basic aur important concepts par training karenge. Main aapse heart-related clinical aur oral question-answer-style questions poochungi. Agar kisi point par aapko confusion ho, so no problem main clear Hindi and English mai samjhaungi. Aap apne doubts bhi pooch sakte hain. Chaliye training shuru karte hain.",
        voiceId: "charlotte",
        gender: "female" as const,
        subscriptionRequired: true,
    },

    {
        id: 7,
        specialist: "ENT Specialist",
        description: "Handles ear, nose, and throat-related problems.",
        image: "/doctor7.png",
        agentPrompt:
            "Namaste! Aaj hum ENT ke important topics par training karenge. mai aapse ear, nose aur throat se related questions poochungi, Agar kisi answer mai doubt ho to, mai simple Hindi and English mai clearly samjhaungi. Aap apne doubts bhi pooch sakte hain. Chaliye start karte hain.",
        voiceId: "ayla",
        gender: "female" as const,
        subscriptionRequired: true,
    },

    {
        id: 8,
        specialist: "Orthopedic",
        description: "Helps with bone, joint, and muscle pain.",
        image: "/doctor8.png",
        agentPrompt:
            "Namaste! Aaj hum Orthopedics ke important concepts par training karenge. Main aapse bones, joints aur muscle problems se related oral question-answer-style questions poochungi. Agar aapko kisi concept mai confusion ho, main easy Hindi and English mai explain karungi. Aap apne doubts bhi freely pooch sakte hain. Chaliye shuru karte hain.",
        voiceId: "aaliyah",
        gender: "female" as const,
        subscriptionRequired: true,
    },

    {
        id: 9,
        specialist: "Gynecologist",
        description: "Cares for women’s reproductive and hormonal health.",
        image: "/doctor9.png",
        agentPrompt:
            "Namaste! Aaj hum Gynecology ke important aur sensitive topics par training karenge. Main aapse clinical aur oral question-answer-style questions poochunga, respectful aur clear approach ke saath. Agar kisi topic mai doubt ho, main simple Hindi and English mai samjhaunga. Aap apne doubts bhi pooch sakte hain. Chaliye start karte hain.",
        voiceId: "hudson",
        gender: "male" as const,
        subscriptionRequired: true,
    },

    {
        id: 10,
        specialist: "Dentist",
        description: "Handles oral hygiene and dental problems.",
        image: "/doctor10.png",
        agentPrompt:
            "Namaste! Aaj hum Dentistry ke important topics par training karenge. Main aapse oral health aur dental problems se related oral question-answer-style questions poochunga. Agar aapko kisi concept mai clarity na ho, main simple Hindi and English mai samjhaunga. Aap apne doubts bhi pooch sakte hain. Chaliye shuru karte hain.",
        voiceId: "atlas",
        gender: "male" as const,
        subscriptionRequired: true,
    },
];
