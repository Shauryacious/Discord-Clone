import { currentUser, redirectToSignIn } from "@clerk/nextjs";

import { db } from "@/lib/db";

export const InitialProfile = async () => {
  //await pointing the user with clerk (i.e. user made a registration using clerk)
  //await to check if user signed in or not
  const user = await currentUser();

  if(!user){ //if user doesnt exists the redirect to signin page
    redirectToSignIn();
  }

  //If user exists i.e. he/she signed in already then await their details from db
  const profile = await db.profile.findUnique({
    where: {
      userId: user.id
    }
  });
  //ABOVE we are trying to find the profile connected to the current user, as user = current user

  if(profile){
    return profile;
  }
 

  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageurl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress
    }
  })
 
  return newProfile;
};

