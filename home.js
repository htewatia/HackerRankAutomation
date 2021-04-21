const puppeteer = require("puppeteer");
const PDFDocument = require("pdfkit");
const fs = require("fs");

let cTab;
(async function fn() {
    try {
        let browserOpenPromise = puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"]
        });

        let browser = await browserOpenPromise;
        let allTabsArr = await browser.pages();

        cTab = allTabsArr[0];

        await cTab.goto("https://www.facebook.com/");
        await cTab.waitForSelector("._6ltg");
        await waitAndClick("#email");
        await cTab.type("#email","mailhackthon@gmail.com",{delay:100});
        await waitAndClick("#pass");
        await cTab.type("#pass","Bestbuddy#1",{delay:100});
        await waitAndClick("._42ft._4jy0._6lth._4jy6._4jy1.selected._51sy"); 

        await cTab.url(); 

        await cTab.waitForSelector(".a8c37x1j.ms05siws.hwsy1cff.b7h9ocf4.aaxa7vy3");
        await cTab.click(".a8c37x1j.ms05siws.hwsy1cff.b7h9ocf4.aaxa7vy3");

        await cTab.waitForSelector("#ssrb_left_rail_end");

        await cTab.waitForSelector(".rq0escxv.a8c37x1j.a5nuqjux.l9j0dhe7.k4urcfbm");
        await waitAndClick(".rq0escxv.a8c37x1j.a5nuqjux.l9j0dhe7.k4urcfbm");
        await cTab.type(".rq0escxv.a8c37x1j.a5nuqjux.l9j0dhe7.k4urcfbm","Mark Zuckerberg",{delay:100});

        await cTab.waitForSelector(".oajrlxb2.gs1a9yip.g5ia77u1.mtkw9kbi.tlpljxtp.qensuy8j.ppp5ayq2.goun2846.ccm00jje.s44p3ltw.mk2mc5f4.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.rq0escxv.nhd2j8a9.q9uorilb.mg4g778l.btwxx1t3.pfnyh3mw.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.tgvbjcpo.hpfvmrgz.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.l9j0dhe7.i1ao9s8h.esuyzwwr.f1sip0of.du4w35lb.lzcic4wl.abiwlrkh.p8dawk7l.k4urcfbm",{delay:100});
        await cTab.click(".oajrlxb2.gs1a9yip.g5ia77u1.mtkw9kbi.tlpljxtp.qensuy8j.ppp5ayq2.goun2846.ccm00jje.s44p3ltw.mk2mc5f4.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.rq0escxv.nhd2j8a9.q9uorilb.mg4g778l.btwxx1t3.pfnyh3mw.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.tgvbjcpo.hpfvmrgz.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.l9j0dhe7.i1ao9s8h.esuyzwwr.f1sip0of.du4w35lb.lzcic4wl.abiwlrkh.p8dawk7l.k4urcfbm",{delay:100});

        await cTab.waitForSelector(".oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.gmql0nx0.gpro0wi8.lrazzd5p.dkezsu63",{delay:100});
        await cTab.click(".oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.gmql0nx0.gpro0wi8.lrazzd5p.dkezsu63",{delay:100});

        await waitAndClick(".cgat1ltu.kkf49tns.g5gj957u.r2nqfv2r.jgsskzai",{delay:100}); 
        await waitAndClick(".a8c37x1j.ms05siws.hwsy1cff.b7h9ocf4.em6zcovv",{delay:100});

        await cTab.waitForSelector(".m9osqain.a5q79mjw.jm1wdb64.k4urcfbm");
        await waitAndClick(".m9osqain.a5q79mjw.jm1wdb64.k4urcfbm",{delay:100});
        await cTab.waitForSelector(".taijpn5t.cb02d2ww.j83agx80.rq0escxv.linmgsc8.bp9cbjyn");
        await cTab.type(".m9osqain.a5q79mjw.jm1wdb64.k4urcfbm","Thank You PEPCODING..",{delay:200});
        await waitAndClick(".rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.taijpn5t.bp9cbjyn.owycx6da.btwxx1t3.kt9q3ron.ak7q8e6j.isp2s0ed.ri5dt5u2.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.ni8dbmo4.stjgntxs.d1544ag0.tw6a2znq.s1i5eluu.tv7at329");

        await cTab.url(); 
        await cTab.waitForSelector(".s45kfl79.emlxlaya.bkmhp75w.spb7xbtv.i09qtzwb.n7fi1qx3.b5wmifdl.hzruof5a.pmk7jnqg.j9ispegn.kr520xx4.c5ndavph.art1omkt.ot9fgl3s.rnr61an3");
        await cTab.click(".s45kfl79.emlxlaya.bkmhp75w.spb7xbtv.i09qtzwb.n7fi1qx3.b5wmifdl.hzruof5a.pmk7jnqg.j9ispegn.kr520xx4.c5ndavph.art1omkt.ot9fgl3s.rnr61an3");

        await cTab.waitForSelector(".hu5pjgll.lzf7d6o1.sp_zzsW0hr9P64_1_5x.sx_147fba");
        await cTab.click(".hu5pjgll.lzf7d6o1.sp_zzsW0hr9P64_1_5x.sx_147fba");

    } catch (err) {
        console.log(err);
    }
})();

async function waitAndClick(selector) {
    try {
        await cTab.waitForSelector(selector, { visible: true });
        await cTab.click(selector);// by this we wil await and click
    }
    catch (err) {
        return new Error(err);
    }
}