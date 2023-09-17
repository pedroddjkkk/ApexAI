"use client";

import { useRouter } from "next/navigation";
import { z } from "zod";

const Form = ({
  children,
  action,
  onError,
}: {
  children: React.ReactNode;
  action: string;
  onError?: (error: any) => void;
}) => {
  const router = useRouter();
  return (
    <form
      action={action}
      method="post"
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const response = await fetch(action, {
          method: "POST",
          body: formData,
          redirect: "manual",
        });

        if (response.status === 400) {
          const res = await response.json();
          if (onError) {
            onError(res.error);
          }
        }

        if (response.status === 0) {
          return router.refresh();
        }
      }}
    >
      {children}
    </form>
  );
};

export default Form;
