import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import newUserFactory from "@/factory/user";
import { newUserSchema } from "@/validation/newUser";
import { ZodError } from "zod";
export default function NewUserForm() {
  //Form States
  const [formState, setFormState] = useState({
    name: "",
    password: "",
    repeatPassword: "",
  });
  //States for feedback
  const [feedback, setFeedback] = useState("");
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFeedback("");
    //Validate that password and repeat password are the same
    if (formState.password !== formState.repeatPassword) {
      setFeedback("Password does not match");
      return;
    }
    //Create request object
    const newUser = newUserFactory({
      name: formState.name.trim(),
      password: formState.password,
    });
    //Validate request
    try {
      newUserSchema.parse(newUser);
    } catch (error) {
      if (error instanceof ZodError) {
        const errorJSON = JSON.parse(error.message);
        setFeedback(errorJSON[0].message);
      }
    }
    //Make HTTP request
    //Display feedback
  }
  return (
    <div className="max-w-[1300px]">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            value={formState.name}
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Password</Label>
          <Input
            type="text"
            placeholder="password"
            value={formState.password}
            onChange={(e) =>
              setFormState({ ...formState, password: e.target.value })
            }
          />
          <Input
            type="text"
            placeholder="repeat password"
            value={formState.repeatPassword}
            onChange={(e) =>
              setFormState({ ...formState, repeatPassword: e.target.value })
            }
          />
        </div>
        <Button className="mt-2">Create Account</Button>
      </form>
    </div>
  );
}
