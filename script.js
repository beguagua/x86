var emulator = new V86Starter({
    wasm_path: "https://copy.sh/v86/build/v86.wasm",
    memory_size: 128 * 1024 * 1024,
    vga_memory_size: 2 * 1024 * 1024,
    screen_container: document.getElementById("v86-container"),
    bios: { url: "bios/seabios.bin" },
    vga_bios: { url: "bios/vgabios.bin" },
    cdrom: { url: "disks/mikeos.iso" },
    autostart: true,
});
