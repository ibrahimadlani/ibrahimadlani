import Image from "next/image";

const CertificationsItem = ({ date, title, company, certificationUrl, imageAlt, image }) => {
  return (
    <li className="mb-12">
      <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <Image
          alt={imageAlt}
          src={image}
          width={200}
          className="z-10 col-span-2 rounded border-2 border-primary/10 transition group-hover:border-primary/30 sm:col-span-2"
        />
        <div className="z-10 col-span-6">
          <p className="-mt-1 text-sm font-semibold leading-6">{date}</p>
          <h3 className="-mt-1 font-medium">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-primary hover:text-accent focus-visible:text-teal-300 group/link text-base"
              href={certificationUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${title} (opens in a new tab)`}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {title}{" "}
                <span className="inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
            </a>
            <div>
              <div className="text-muted" aria-hidden="true">
                {company}
              </div>
            </div>
          </h3>
        </div>
      </div>
    </li>
  );
};

export default CertificationsItem;
