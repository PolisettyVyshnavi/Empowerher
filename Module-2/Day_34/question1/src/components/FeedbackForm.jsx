import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: "", email: "", feedback: "" });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setSubmitted(form);
    setForm({ name: "", email: "", feedback: "" });
  };

  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader>Feedback Form</CardHeader>
      <CardContent className="space-y-4">
        <Input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <Input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <Textarea name="feedback" placeholder="Your feedback..." value={form.feedback} onChange={handleChange} />
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit}>Submit</Button>
      </CardFooter>
      {submitted && (
        <div className="p-4 text-sm text-gray-700">
          <p><strong>Name:</strong> {submitted.name}</p>
          <p><strong>Email:</strong> {submitted.email}</p>
          <p><strong>Feedback:</strong> {submitted.feedback}</p>
        </div>
      )}
    </Card>
  );
}