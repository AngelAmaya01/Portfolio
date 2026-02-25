import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "./LanguageToggle";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Status {
  submitted: boolean;
  success: boolean;
  message: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>({
    submitted: false,
    success: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {}, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const userId = import.meta.env.VITE_EMAILJS_USER_ID;

      if (!serviceId || !templateId || !userId) {
        throw new Error("EmailJS environment variables are not defined");
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        to_name: "Angel Amaya",
        message: formData.message,
        reply_to: formData.email,
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        userId
      );
      console.log("Email sent successfully:", response);

      setStatus({
        submitted: true,
        success: true,
        message: t('successMessage'),
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({
        submitted: true,
        success: false,
        message: t('errorMessage'),
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 border border-gray-200 dark:border-blue-500/10 focus:border-blue-500/30 transition-all backdrop-blur-sm placeholder-gray-400 dark:placeholder-gray-500";

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          {t('contactMe')}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'angelnataren16@gmail.com',
                href: 'mailto:angelnataren16@gmail.com',
              },
              {
                icon: Phone,
                label: 'Phone',
                value: '+504 9828-8917',
                href: 'tel:+50498288917',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Santa Rosa de Copán, Honduras',
                href: undefined,
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center space-x-4 group">
                <div className="p-4 bg-blue-100 dark:bg-blue-500/10 rounded-xl group-hover:bg-blue-200 dark:group-hover:bg-blue-500/20 transition-colors duration-300 border border-blue-200 dark:border-blue-500/20">
                  <Icon className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-gray-900 dark:text-white font-medium mb-1">{label}</h3>
                  {href ? (
                    <a
                      href={href}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
            onSubmit={handleSubmit}
          >
            {status.submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`p-6 rounded-xl ${
                  status.success
                    ? "bg-green-100 dark:bg-green-500/20 border border-green-200 dark:border-green-500/30"
                    : "bg-red-100 dark:bg-red-500/20 border border-red-200 dark:border-red-500/30"
                } backdrop-blur-sm`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  {status.success ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <AlertCircle className="w-6 h-6 text-red-500" />
                  )}
                  <h3
                    className={`font-medium text-xl ${
                      status.success
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {status.success ? t('successTitle') : t('errorTitle')}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{status.message}</p>
                <button
                  type="button"
                  onClick={() =>
                    setStatus({ submitted: false, success: false, message: "" })
                  }
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors"
                >
                  {t('sendAnother')}
                </button>
              </motion.div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('yourName')}
                    required
                    className={inputClass}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('yourEmail')}
                    required
                    className={inputClass}
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t('yourSubject')}
                  required
                  className={inputClass}
                />
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('yourMessage')}
                  required
                  className={`${inputClass} resize-none`}
                />
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className={`w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group ${
                    loading
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:from-blue-500 hover:to-purple-500 hover:shadow-lg hover:shadow-blue-500/25"
                  }`}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      {t('sending')}
                    </>
                  ) : (
                    <>
                      {t('sendMessage')}
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};
