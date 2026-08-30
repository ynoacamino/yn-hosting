"use client";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { GoCircleSlash } from "react-icons/go";
import type { TinaField } from "tinacms";
import { Button } from "tinacms";
import { IconMapper, iconMapper } from "@/lib/icons";

const parseIconName = (name: string) => {
  const splitName = name.split(/(?=[A-Z])/);
  if (splitName.length > 1) {
    return splitName.join(" ");
  }
  return name;
};

type TinaUIComponent = Extract<
  NonNullable<NonNullable<TinaField["ui"]>["component"]>,
  React.ComponentType<never>
>;

type IconPickerInputProps = Parameters<TinaUIComponent>[0];

export const IconPickerInput: React.FC<IconPickerInputProps> = ({ input }) => {
  const [filter, setFilter] = React.useState("");
  const availableIconNames = React.useMemo(() => Object.keys(iconMapper), []);

  const filteredIcons = React.useMemo(() => {
    return availableIconNames.filter((name) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [availableIconNames, filter]);

  const inputValue = typeof input.value === "string" ? input.value : "";
  const inputLabel = inputValue
    ? parseIconName(inputValue)
    : "Seleccionar Icono";

  const handleSelectIcon = (iconName: string) => {
    const syntheticEvent = {
      target: {
        name: input.name,
        value: iconName,
      },
    } as React.ChangeEvent<HTMLInputElement>;
    input.onChange(syntheticEvent);
  };

  return (
    <div className="relative z-[1000]">
      <input
        type="text"
        id={input.name}
        className="hidden"
        value={inputValue}
        onChange={input.onChange}
      />
      <Popover>
        {({ open }) => (
          <>
            <PopoverButton as="div">
              <Button
                className={`flex h-11 items-center gap-2 px-4 text-sm ${
                  inputValue ? "h-11" : "h-10"
                }`}
                size="custom"
                rounded="full"
                variant={open ? "secondary" : "white"}
              >
                {inputValue && (
                  <IconMapper
                    name={inputValue}
                    className="h-6 w-6 fill-current text-emerald-400"
                  />
                )}
                <span>{inputLabel}</span>
                {!inputValue && (
                  <BiChevronRight className="ml-1 h-5 w-5 opacity-70" />
                )}
              </Button>
            </PopoverButton>
            <div
              className="absolute -bottom-2 left-0 w-full min-w-[280px] max-w-md translate-y-full"
              style={{ zIndex: 1000 }}
            >
              <Transition
                enter="transition duration-150 ease-out"
                enterFrom="transform opacity-0 -translate-y-2"
                enterTo="transform opacity-100 translate-y-0"
                leave="transition duration-75 ease-in"
                leaveFrom="transform opacity-100 translate-y-0"
                leaveTo="transform opacity-0 -translate-y-2"
              >
                <PopoverPanel className="relative z-50 overflow-hidden rounded-lg border border-gray-700 bg-gray-900 text-white shadow-xl">
                  {({ close }) => (
                    <div className="flex h-full max-h-[22rem] w-full flex-col">
                      <div className="z-10 border-gray-700 border-b bg-gray-800 p-2.5">
                        <input
                          type="text"
                          className="block w-full rounded border border-gray-700 bg-gray-900 px-3 py-1.5 text-sm text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          value={filter}
                          onChange={(e) => setFilter(e.target.value)}
                          placeholder="Buscar icono..."
                        />
                      </div>
                      {filteredIcons.length === 0 && (
                        <div className="py-4 text-center text-gray-400 text-xs">
                          No se encontraron iconos
                        </div>
                      )}
                      {filteredIcons.length > 0 && (
                        <div className="grid max-h-60 w-full grid-cols-4 gap-2 overflow-y-auto p-3">
                          <button
                            type="button"
                            className="flex flex-col items-center justify-center rounded p-2 text-gray-400 transition hover:bg-gray-800 hover:text-red-400"
                            onClick={() => {
                              handleSelectIcon("");
                              setFilter("");
                              close();
                            }}
                            title="Quitar icono"
                          >
                            <GoCircleSlash className="h-6 w-6" />
                            <span className="mt-1 text-[10px]">Ninguno</span>
                          </button>
                          {filteredIcons.map((name) => (
                            <button
                              key={name}
                              type="button"
                              className={`flex flex-col items-center justify-center rounded p-2 transition hover:bg-gray-800 ${
                                inputValue === name
                                  ? "border border-emerald-500 bg-emerald-950/60 text-emerald-400"
                                  : "text-gray-200"
                              }`}
                              onClick={() => {
                                handleSelectIcon(name);
                                setFilter("");
                                close();
                              }}
                              title={name}
                            >
                              <IconMapper name={name} className="h-6 w-6" />
                              <span className="mt-1 max-w-full truncate text-[10px]">
                                {name}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </PopoverPanel>
              </Transition>
            </div>
          </>
        )}
      </Popover>
    </div>
  );
};

export const iconSchema: TinaField = {
  type: "string",
  label: "Icono",
  name: "icon",
  ui: {
    component: IconPickerInput,
  },
};
