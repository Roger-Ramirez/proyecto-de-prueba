let dineroCofla = prompt("cuanto dinero tiene Cofla?");
let dineroPedro = prompt("cuanto dinero tiene Pedro?");
let dineroRoberto = prompt("cuanto dinero tiene Roberto?");

dineroCofla= parseInt(dineroCofla);

if (dineroCofla >=0.6 && dineroCofla<1) {
	alert(" cofla, comprate el helado de agua");
	alert("y tu vuelto es:" + (dineroCofla-0.6))
}
else if (dineroCofla >=1 && dineroCofla<1.6) {
	alert(" cofla, comprate el helado de crema");
	alert("y tu vuelto es:" + (dineroCofla-1))
}
else if (dineroCofla >=1.6 && dineroCofla<1.7) {
	alert(" cofla, comprate el helado de heladix");
	alert("y tu vuelto es:" + (dineroCofla-1.6))
}
else if (dineroCofla >=1.7 && dineroCofla<1.8) {
	alert(" cofla, comprate el helado de heladovich");
	alert("y tu vuelto es:" + (dineroCofla-1.7))
}
else if (dineroCofla >=1.8 && dineroCofla<2.9) {
	alert(" cofla, comprate el helado de helardo");
	alert("y tu vuelto es:" + (dineroCofla-1.8))	
}
else if (dineroCofla >=2.9) {
	alert(" cofla, comprate el helado con confites o el bote de 1/4kg");
	alert("y tu vuelto es:" + (dineroCofla-2.9))
}
else {
	alert("no te alcanza el dinero")
}



if (dineroPedro >=0.6 && dineroPedro<1) {
	alert(" Pedro, comprate el helado de agua");
}
else if (dineroPedro >=1 && dineroPedro<1.6) {
	alert(" Pedro, comprate el helado de crema");
}
else if (dineroPedro >=1.6 && dineroPedro<1.7) {
	alert(" Pedro, comprate el helado de heladix");
}
else if (dineroPedro >=1.7 && dineroPedro<1.8) {
	alert(" Pedro, comprate el helado de heladovich");
}
else if (dineroPedro >=1.8 && dineroPedro<2.9) {
	alert(" Pedro, comprate el helado de helardo");	
}
else if (dineroPedro >=2.9) {
	alert(" Pedro, comprate el helado con confites o el bote de 1/4kg");
}
else {
	alert("no te alcanza el dinero")
}


if (dineroRoberto >=0.6 && dineroRoberto<1) {
	alert(" Roberto, comprate el helado de agua");
}
else if (dineroRoberto >=1 && dineroRoberto<1.6) {
	alert(" Roberto, comprate el helado de crema");
}
else if (dineroRoberto >=1.6 && dineroRoberto<1.7) {
	alert(" Roberto, comprate el helado de heladix");
}
else if (dineroRoberto >=1.7 && dineroRoberto<1.8) {
	alert(" Roberto, comprate el helado de heladovich");
}
else if (dineroRoberto >=1.8 && dineroRoberto<2.9) {
	alert(" Roberto, comprate el helado de helardo");	
}
else if (dineroRoberto >=2.9) {
	alert(" Roberto, comprate el helado con confites o el bote de 1/4kg");
}
else {
	alert("no te alcanza el dinero")
}






