import {
  IconAutomation,
  IconBoltFilled,
  IconBulb,
  IconMap,
  IconShield,
  IconTable,
  IconTableFilled,
  IconUserCog,
  IconUsers,
  IconWorld,
} from "@tabler/icons-react";
import {
  AppWindow as IconAppWindow,
  HardDrive as IconHardDrive,
  HardDriveDownload as IconHardDriveDownload,
  History as IconHistory,
  MemoryStick as IconMemoryStick,
  MonitorCheck as IconMonitorCheck,
  PackageCheck as IconPackageCheck,
  Signal as IconSignal,
  Smartphone as IconSmartphone,
  UsersRound as IconUsersRound,
} from "lucide-react";
import type React from "react";

import IconForge from "@/components/icons/forge";
import IconSpigot from "@/components/icons/spigot";

export type IconName =
  | "Spigot"
  | "Forge"
  | "Automation"
  | "BoltFilled"
  | "Bulb"
  | "Map"
  | "Shield"
  | "Table"
  | "TableFilled"
  | "UserCog"
  | "Users"
  | "World"
  | "HardDrive"
  | "HardDriveDownload"
  | "MemoryStick"
  | "Smartphone"
  | "UsersRound"
  | "AppWindow"
  | "Signal"
  | "PackageCheck"
  | "MonitorCheck"
  | "History";

export const iconMapper: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Spigot: IconSpigot,
  Forge: IconForge,
  Automation: IconAutomation,
  BoltFilled: IconBoltFilled,
  Bulb: IconBulb,
  Map: IconMap,
  Shield: IconShield,
  Table: IconTable,
  TableFilled: IconTableFilled,
  UserCog: IconUserCog,
  Users: IconUsers,
  World: IconWorld,
  HardDrive: IconHardDrive,
  HardDriveDownload: IconHardDriveDownload,
  MemoryStick: IconMemoryStick,
  Smartphone: IconSmartphone,
  UsersRound: IconUsersRound,
  AppWindow: IconAppWindow,
  Signal: IconSignal,
  PackageCheck: IconPackageCheck,
  MonitorCheck: IconMonitorCheck,
  History: IconHistory,
};

export function IconMapper({
  name,
  className,
}: {
  name?: string | null;
  className?: string;
}) {
  if (!name) return null;
  const IconComponent = iconMapper[name];
  if (!IconComponent) return null;

  return <IconComponent className={className} />;
}
