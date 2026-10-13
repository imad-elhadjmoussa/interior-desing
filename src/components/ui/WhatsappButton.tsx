import whatsapp_img from "./../../assets/social media/whatsapp.png";

type WhatsappButtonProps = {
    phoneNumber: string;
    message?: string;
};

export function WhatsappButton({
    phoneNumber,
    message = "",
}: WhatsappButtonProps) {
    const cleanNumber = phoneNumber.replace(/\D/g, "");

    const href = `https://wa.me/${cleanNumber}${message ? `?text=${encodeURIComponent(message)}` : ""
        }`;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full  shadow-lg transition-transform duration-200 hover:scale-110"
        >
            <img
                src={whatsapp_img}
                alt="WhatsApp"
                className="sie-16"
            />
        </a>
    );
}