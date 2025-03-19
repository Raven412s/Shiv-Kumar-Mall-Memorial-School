import { Menu } from "@/types";
import { Calendar1, HomeIcon, Megaphone, MenuSquare, MessageSquare, Settings, Settings2, User2Icon } from "lucide-react";
import { FiUserCheck } from "react-icons/fi";
import { GiMegaphone, GiTeacher } from "react-icons/gi";
import { LuNotebookPen } from "react-icons/lu";
import { PiExamLight, PiNotepadDuotone, PiNotePencilDuotone, PiSignOut, PiStudentDuotone } from "react-icons/pi";
import { RiParentLine, RiProfileLine } from "react-icons/ri";
import { SlBookOpen } from "react-icons/sl";
import { TbReport } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

export const menuItems: Menu[] = [
    {
        icon: <MenuSquare className="stroke-stone-500" />,
        title: "MENU",
        linkItems: [
          {
            Icon: HomeIcon,
            label: "Home",
            href: "/",
            visible: ["admin", "teacher", "student", "parent"],
          },
          {
            Icon: GiTeacher,
            label: "Teachers",
            href: "/list/teachers",
            visible: ["admin", "teacher"],
          },
          {
            Icon: PiStudentDuotone,
            label: "Students",
            href: "/list/students",
            visible: ["admin", "teacher"],
          },
          {
            Icon: RiParentLine,
            label: "Parents",
            href: "/list/parents",
            visible: ["admin", "teacher"],
          },
          {
            Icon: LuNotebookPen,
            label: "Subjects",
            href: "/list/subjects",
            visible: ["admin"],
          },
          {
            Icon: SlBookOpen,
            label: "Classes",
            href: "/list/classes",
            visible: ["admin", "teacher"],
          },
          {
            Icon: PiNotePencilDuotone,
            label: "Lessons",
            href: "/list/lessons",
            visible: ["admin", "teacher"],
          },
          {
            Icon: PiExamLight,
            label: "Exams",
            href: "/list/exams",
            visible: ["admin", "teacher", "student", "parent"],
          },
          {
            Icon: PiNotepadDuotone,
            label: "Assignments",
            href: "/list/assignments",
            visible: ["admin", "teacher", "student", "parent"],
          },
          {
            Icon: TbReport,
            label: "Results",
            href: "/list/results",
            visible: ["admin", "teacher", "student", "parent"],
          },
          {
            Icon: FiUserCheck,
            label: "Attendance",
            href: "/list/attendance",
            visible: ["admin", "teacher", "student", "parent"],
          },
          {
            Icon: Calendar1,
            label: "Events",
            href: "/list/events",
            visible: ["admin", "teacher", "student", "parent"],
          },
          {
            Icon: MessageSquare,
            label: "Messages",
            href: "/list/messages",
            visible: ["admin", "teacher", "student", "parent"],
          },
          {
            Icon: GiMegaphone,
            label: "Announcements",
            href: "/list/announcements",
            visible: ["admin", "teacher", "student", "parent"],
          },
        ],
      },
      {
        icon: <Settings className="stroke-stone-500" />,
        title: "OTHER",
        linkItems: [
          {
            Icon: CgProfile,
            label: "Profile",
            href: "/profile",
            visible: ["admin", "teacher", "student", "parent"],
          },
          {
            Icon: Settings2,
            label: "Settings",
            href: "/settings",
            visible: ["admin", "teacher", "student", "parent"],
          },
          {
            Icon: PiSignOut,
            label: "Logout",
            href: "/logout",
            visible: ["admin", "teacher", "student", "parent"],
          },
        ],
      },
    ];
