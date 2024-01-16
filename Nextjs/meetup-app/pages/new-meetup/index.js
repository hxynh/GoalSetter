import { useRouter } from "next/router";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";

export default function Meetup() {
    const router = useRouter();

    async function addMeetupHandler (enteredData) {
        const response = await fetch ('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = response.json();
        
        router.push('/');
    }

    return (
        <>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    );
}