import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { InitialProfile } from "@/lib/initial-profile";
import { InitialModal } from "@/components/modals/initial-modal";

const SetupPage = async () => {
  //when user comes to home page then we will check if it already exists and if not then we will make him/her make a new user profile
  //then we will get(await) the profile from db and save it in profile variable
  const profile = await InitialProfile();

  //then we will check if the profile is linked with any server or not
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  })

  //if it is linked with a server then we will return the server detailes by navigating
  if (server) {
    return redirect(`/server/${server.id}`);
  }

  //if the server doesnt exist we recommend to create a new server
  return <InitialModal />
  ;
}
 
export default SetupPage;