declare module "@mui/material/styles" {
  interface VmaPalette {
    darkGrey: string;
    white: string;
    whiteSmoke: string;
    grey: string;
    foggyGrey: string;
    sonicSilver: string;
    warning: string;
    lightYellow: string;
    lightGrey: string;
    mediumGrey: string;
  }

  interface Palette {
    vma: VmaPalette;
  }

  interface PaletteOptions {
    vma?: Partial<VmaPalette>;
  }
}

export default true;
