export const navItems = [
    { name: "About", link: "#about" },
    { name: "Education", link: "#education" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Specializing in Hardware Design and Verification",
      description: "Exploring computer architectures and system improvements.",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "./hardware.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Passionate about AI and Machine Learning",
      description: "Transforming ideas into real-life applications with AI.",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Exploring Design Space Trade-offs",
      description: "Evaluating optimal solutions through statistical analysis.",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Innovating in Computer Engineering",
      description: "Researching SRAM compression and deep learning performance.",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "./research.svg",
    },
    
    {
      id: 6,
      title: "Quantum Computing Enthusiast",
      description: "Researching about the innovation of quantum computing and solving some problems about it.",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "CPU Scheduler Simulation",
      des: "Simulated various CPU scheduling algorithms to optimize task performance.",
      img: "/cpu_scheduler.png",
      iconLists: ["./java.svg"],
      link: "https://github.com/Abdallah-RA/CPU-Scheduler",
    },
    {
      id: 2,
      title: "Multicycle CPU Implementation",
      des: "Designed and implemented a multi-cycle CPU using Verilog.",
      img: "./multicycle_cpu.png",
      iconLists: ["./verilog.svg", "./fpga.svg"],
      link: "https://github.com/Abdallah-RA/Risc-MultiCycleCPU",
    },
    {
      id: 3,
      des: "Built a verification environment using Universal Verification Methodology.",
      img: "./UVM.png",
      iconLists: ["./systemverilog.svg", "./uvm.svg"],
      link: "https://edaplayground.com/x/NVuD",
    },
    {
      id: 4,
      title: "Shortest Path for Palestinian Cities",
      des: "Developed a program to calculate the shortest path using graph algorithms.",
      img: "./shortest_path.png",
      iconLists: ["./c.svg", "./algorithm.svg"],
      link: "https://github.com/Abdallah-RA/Shortest-Path-for-Palestinian-Cities-in-C",
    },
  ];
  
  export const testimonials = [

  ];
  
  export const companies = [

  ];
  
  export const workExperience = [];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/linkedin.svg",
      link: "https://linkedin.com/in/abdallah-awad-079676301",
    },
    {
      id: 2,
      img: "/github.svg",
      link: "https://github.com/Abdallah-RA",
    },
  ];
