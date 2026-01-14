import ciscoLogo from "../assets/cisco-logo.svg";
import dellLogo from "../assets/dell-logo.svg";
import dockerLogo from "../assets/docker-logo.svg";
import githubLogo from "../assets/github-logo.svg";
import gitlabLogo from "../assets/gitlab-logo.svg";
import hpLogo from "../assets/hp-logo.svg";
import hyperVLogo from "../assets/hyperv-logo.svg";
import linuxLogo from "../assets/linux-logo.svg";
import msAzureLogo from "../assets/microsoft-azure-logo.svg";
import powershellLogo from "../assets/powershell-logo.svg";
import proxmoxLogo from "../assets/proxmox.svg";
import vmLogo from "../assets/vmware-logo.svg";
import windowsServerLogo from "../assets/windows-server-logo.svg";

import backgroundImage1 from "../assets/bg-image1.jpg";
import backgroundImage2 from "../assets/bg-image2.jpg";
import backgroundImage3 from "../assets/bg-image3.jpg";
import backgroundImage4 from "../assets/bg-image4.jpg";
import backgroundImage5 from "../assets/bg-image5.jpg";
import backgroundImage6 from "../assets/bg-image6.jpg";  

// import linkedin from "../assets/linkedin.svg";
// import file from "../assets/file.svg";

import { FaRegFile, FaLinkedin } from "react-icons/fa";
import guyCV from "../assets/GuySalmonNEW_CV_2026-web.pdf";


export const logosData = [
    { id: 1, src: dockerLogo, alt: "Image Docker" },
    { id: 2, src: ciscoLogo, alt: "Image Cisco" },
    { id: 3, src: dellLogo, alt: "Image Dell" },
    { id: 4, src: githubLogo, alt: "Image GitHub" },
    { id: 5, src: gitlabLogo, alt: "Image GitLab" },
    { id: 6, src: hpLogo, alt: "Image HP" },
    { id: 7, src: hyperVLogo, alt: "Image Hyper-v" },
    { id: 8, src: linuxLogo, alt: "Image Linux" },
    { id: 9, src: msAzureLogo, alt: "Image MS Azure" },
    { id: 10, src: windowsServerLogo, alt: "Image Windows Server" },
    { id: 11, src: powershellLogo, alt: "Image PowerShell" },
    { id: 12, src: proxmoxLogo, alt: "Image ProxMox" },
    { id: 13, src: vmLogo, alt: "Image VM Ware" },
];

export const deepDiveData = [
  {
    id: 1,
    heading: "Data centre migration",
    description:
      "Planned and delivered end-to-end data centre migrations, including workload discovery, dependency mapping, cutover execution, and post-migration validation while minimizing downtime and business impact.",
    image: backgroundImage1,
  },
  {
    id: 2,
    heading: "P2V",
    description:
      "Converted physical servers into virtual machines, optimizing resource utilization, improving resilience, and validating performance and application stability post-migration.",
    image: backgroundImage2,
  },
  {
    id: 3,
    heading: "V2V",
    description:
      "Migrated virtual workloads between platforms and environments, managing compatibility, networking, storage conversion, and service continuity.",
    image: backgroundImage3,
  },
  {
    id: 4,
    heading: "Cloud migration",
    description:
      "Migrated infrastructure, applications, and data to cloud platforms using re-host and modernization strategies while ensuring security, scalability, and cost optimization.",
    image: backgroundImage4,
  },
  {
    id: 5,
    heading: "Repatriation",
    description:
      "Migrated workloads from cloud back to on-prem or private infrastructure to meet cost, compliance, or performance requirements with minimal service disruption.",
    image: backgroundImage5,
  },
  {
    id: 6,
    heading: "Applications migration",
    description:
      "Delivered application migrations across platforms, managing dependencies, testing, cutover, and post-migration validation. and delivered end-to-end data centre migrations, including workload discovery, dependency mapping, cutover execution, and post-migration validation while minimizing downtime and business impact.",
    image: backgroundImage6,
  },
];    

export const contactIcons = [
  {
    icon: FaLinkedin,
    alt: "linkedIn icon",
    link: "https://www.linkedin.com/in/guysalmon",
  },
  {
    icon: FaRegFile,
    alt: "file icon",
    link: guyCV,
  },
];
