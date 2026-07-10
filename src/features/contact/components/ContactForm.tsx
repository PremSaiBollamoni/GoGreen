import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { TextField, TextAreaField } from '@/components/forms/FormField';
import { enquirySchema, type EnquiryFormValues } from '../schema';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { enquiryType: 'business' },
  });

  const enquiryType = watch('enquiryType');

  async function onSubmit() {
    // No backend yet — this will POST to the enquiries API once it exists.
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-line bg-paper p-10 text-center"
      >
        <CheckCircle2 size={32} strokeWidth={1.5} className="mx-auto text-canopy" />
        <p className="mt-5 font-display text-xl font-medium">Enquiry sent.</p>
        <p className="mt-2 text-sm text-graphite/60">
          We'll get back to you at the address you provided.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-forest hover:text-canopy"
        >
          Send another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <h2 className="font-display text-2xl font-medium tracking-tight">Send an Enquiry</h2>
      <div className="flex gap-3">
        {(['business', 'career'] as const).map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setValue('enquiryType', type)}
            className={`border px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] transition-colors ${
              enquiryType === type
                ? 'border-forest bg-forest text-mist'
                : 'border-line text-graphite/60 hover:border-forest'
            }`}
          >
            {type === 'business' ? 'Business Enquiry' : 'Career Enquiry'}
          </button>
        ))}
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <TextField label="Full Name" id="name" {...register('name')} error={errors.name?.message} />
        <TextField
          label="Email"
          id="email"
          type="email"
          {...register('email')}
          error={errors.email?.message}
        />
      </div>

      <TextField
        label="Company (optional)"
        id="company"
        {...register('company')}
        error={errors.company?.message}
      />

      <TextAreaField
        label="Message"
        id="message"
        rows={5}
        {...register('message')}
        error={errors.message?.message}
      />

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Send Enquiry'}
      </Button>
    </form>
  );
}
