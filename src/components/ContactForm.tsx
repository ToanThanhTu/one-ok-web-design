import { useForm } from "react-hook-form";
import { Button, Input, Textarea } from "@material-tailwind/react";
import type { ContactFormData } from "../types";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <h1>Make An Appointment</h1>
      
      <div>
        <label htmlFor="name">Name</label>
        <Input
          id="name"
          type="text"
          {...register("name", { required: true })}
          placeholder="Name"
        />
        {errors.name && <p role="alert">Name is required</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        {errors.email && <p role="alert">Email is required</p>}
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <Input
          id="phone"
          {...register("phone", { pattern: /^\+?(?:\d[-\(\)\s]?){6,}$/ })}
          placeholder="Phone"
        />
        {errors.phone && <p role="alert">Invalid phone</p>}
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <Textarea
          id="message"
          {...register("message", { required: true })}
          placeholder="Write message..."
        />
        {errors.message && <p role="alert">Message is required</p>}
      </div>

      <Button type="submit">Send Message</Button>
    </form>
  );
}

export default ContactForm;
