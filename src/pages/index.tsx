// import { Base } from '../templates/Base';

import { Base } from "@/components/templates";
import { useAuth } from "@/utils/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Index = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      const roleName = user.roleName.toLowerCase();
      router.push(`/${roleName}/dashboard`);
    }
  }, [user, router]);
  return <Base />;
};

export default Index;
