import { useTranslation } from "react-i18next";
import IconButton from "./common/Button"

const Banner = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Contenedor principal */}
      <div className="bg-[#B27B50] w-full md:w-[80%] xl:w-[70%] p-8 md:p-16 xl:p-20 flex justify-center md:justify-end">
        <p className="whitespace-pre-line text-2xl md:text-3xl xl:text-5xl font-bold leading-snug tracking-tight text-center md:text-right max-w-[90%] md:max-w-[80%]">
        {t("banner")}
        </p>
      </div>

      {/* Botones sociales */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 py-8 md:py-10 px-6 md:px-20">
        <IconButton
          text="GitHub"
          iconSrc="icons/github.svg"
          alt="GitHub icon"
          onClick={() => window.open("https://github.com/ambargorgon", "_blank")}
        />
        <IconButton
          text="Linkedin"
          iconSrc="icons/linkedin.svg"
          alt="Linkedin icon"
          onClick={() => window.open("https://www.linkedin.com/in/ambar-gorgon-6a8442212/", "_blank")}
        />
        <IconButton
          text="Gmail"
          iconSrc="icons/mail.svg"
          alt="Email icon"
          onClick={() => window.open("mailto:ambargorgon@gmail.com", "_blank")}
        />
      </div>
    </>
  )
}

export default Banner
