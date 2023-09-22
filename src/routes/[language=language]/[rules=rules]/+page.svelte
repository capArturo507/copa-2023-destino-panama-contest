<script lang="ts">
	import { currentPage } from '$lib/stores.js';

	currentPage.set('rules');

	export let data;

	$: ({ language } = data);

	const title: Record<App.SupportedLanguage, string> = {
		en: 'Contest Rules',
		es: 'Reglas del Concurso',
		pt: 'Regras do Concurso'
	};
</script>

<svelte:head>
	<title>{title[language]}</title>
</svelte:head>
{#if language === 'en'}
	<div class="pt-64 pb-32 text-grey-0 bg-primary">
		<div class="container mx-auto mt-32">
			<h1>
				<span>Terms and Conditions: " <strong>PANAMA FINAL DESTINATION CONTEST</strong>".</span>
			</h1>
		</div>
	</div>
	<div class="container mx-auto my-32">
		<p><strong>&nbsp;USA</strong></p>
		<p>
			PANAMA FINAL DESTINATION CONTEST! (hereinafter "<strong>THE CONTEST</strong>&rdquo;). On our
			Instagram account you can become one of the winners of (2) Roundtrip tickets to Panama, one
			for the winner and one for his/her companion, through Copa Airlines and 3 hotel nights for
			two.
		</p>
		<p>&nbsp;</p>
		<ol>
			<li><strong>THE CONTEST DYNAMICS</strong></li>
			<li>
				For a period of 15 days you will have the opportunity to answer trivia to accumulate as many
				points as possible in the shortest time possible. You will only be able to participate once,
				so make sure you get it right.
			</li>
			<li>
				The trivia will be published in the link www.destinopanamacopa.com randomly, for two weeks
				starting the week of September 18, 2023.
			</li>
			<li>10 winners will be chosen</li>
			<li>
				Each winner will receive two (2) round trip tickets, one for the winner and one for his/her
				companion with final destination Panama City, Repblic of Panama through Copa Airlines to
				travel from any of the destinations where Copa Airlines operates and a 3-night double room
				stay in a 3 star or 4 star hotel in the Republic of Panama (hereinafter "THE PRIZE").
			</li>
		</ol>
		<p>&nbsp;</p>
		<ol>
			<li><strong>HOW TO PARTICIPATE?</strong></li>
			<li>Follow us on our official Instagram account @CopaAirlinesUSA</li>
			<li>
				Like the official contest post (hereinafter "OFFICIAL POST") published on our official
				Instagram account @CopaAirlinesUSA
			</li>
			<li>
				Visit the link (link) <a href="http://www.destinopanamacopa.com">destinopanamacopa.com</a> that
				you will find available in the Biography of our official account @CopaAirlinesUSA in Instagram,
				our stories and/or in OFFICIAL POST that will take you to the official page of the contest where
				you will find questions about Panama.
			</li>
			<li>
				The 10 people who answer correctly the most questions in the least amount of time will be
				the winners.
			</li>
		</ol>
		<p>&nbsp;</p>
		<ol>
			<li><strong>TERMS AND CONDITIONS</strong></li>
		</ol>
		<p><strong>NO PURCHASE OR PAYMENT OF ANY KIND IS NECESSARY TO ENTER THIS CONTEST.</strong></p>
		<ol>
			<li>
				When participating, you accept and acknowledge the terms and conditions of<strong>
					THE CONTEST.</strong
				>
			</li>
			<li>
				This contest is organized by Compa&ntilde;&iacute;a Paname&ntilde;a de Aviaci&oacute;n, S.A.
				(Copa Airlines), whose headquarters are located at Costa del Este Urbanization, Business
				Park Complex, North Tower, Panama City, Republic of Panama.
			</li>
			<li>
				The Contest is open to individuals who are eighteen (18) years of age or older at the time
				of entry. Copa Airlines has the right to verify each participant's eligibility.
			</li>
			<li>The Contest is valid for United States only.</li>
			<li>The participant must be a follower of the Instagram account @CopaAirlinesUSA</li>
			<li>Only one entry (participation) per user will be accepted.</li>
			<li>
				Any user who does not follow all the steps and comply with all the requirements required by
				Copa Airlines will be automatically eliminated from the contest.
			</li>
			<li>
				Any profile that has more than ten thousand followers (10,000), pet accounts, any account
				used for commercial purposes or business purposes, in the name of a legal entity, or that is
				detected as false or committing fraudulent acts will be removed from the contest.
			</li>
			<li>
				Ten (10) winners will be chosen, this will be the ten (10) people who answer the most
				questions correctly, in the least amount of time and comply with the requirements
				established in this terms and conditions will be the winners. Winners will be announced
				through our official Instagram account <a href="https://www.instagram.com/CopaAirlines/"
					>@CopaAirlines</a
				>USA and any other official network that Copa Airlines considers.
			</li>
			<li>
				Winners will be announced no later than seven (7) calendar days after the end of the
				contest.
			</li>
			<li>
				This contest does not apply to employees of Copa Airlines, Aerorep&uacute;blica, S.A., Copa
				Airlines Colombia and La Nueva Aerol&iacute;nea, S.A., and branches, suppliers of these
				companies, or employees of advertising agencies, employees of Grupo Verde Azul Hotel and
				Grupo Bern influencers or content creators who maintain commercial agreements with them.
			</li>
			<li>
				Any damage or loss (direct, indirect or consequential) to the winner and/or his/her
				companion or property due to the winner's or his/ her companion fault or negligence or any
				cause not attributable to Copa Airlines, in connection with his/her participation in the
				contest or the acceptance, use and enjoyment of the prizes, is the sole responsibility of
				the winner and/or his/her companion or any person joining the winner.
			</li>
			<li>
				Any attempt to violate any of the contest rules, or to give false information with intent to
				defraud, will be prosecuted to the fullest extent of the law. By participating in this
				contest, participants agree and accept the strict application of these rules in all terms.
				Any participation that is altered, forged or otherwise manipulated to claim to be the winner
				will be void. Participants are solely responsible for any present or future situation
				arising out of their own fault or negligence or for any cause not attributable to Copa
				Airlines, in connection with their participation in this contest or arising out of their
				acceptance of the prizes or use of the prizes comprising the contest.
			</li>
			<li>
				The winner and his/her companion grants Copa Airlines and its advertising and public
				relations agencies the right to publish or announce his/her name and to use photographs or
				video recordings that include his/her image and/or voice, in any advertising media without
				any compensation, inside or outside the Panamanian territory, in any existing or future
				advertising or. communication media, for a two (2) years period starting from the
				notification as winner.
			</li>
			<li>
				As a requirement of prize acceptance, the winner and his/her companion will execute a letter
				of acceptance of the prize, a liability release and any other document required by Copa
				Airlines, regarding the terms and conditions in connection with the acceptance and use of
				the prizes to be provided by Copa Airlines.
			</li>
			<li>
				Any individual making changes to the contest operations process or violating laws and does
				not comply with the conditions set forth in these rules will be disqualified.
			</li>
			<li>
				Compa&ntilde;&iacute;a Paname&ntilde;a de Aviaci&oacute;n S.A. (Copa Airlines) has the right
				to disqualify and/or demand the return of the benefits granted to those participants who, in
				Copa Airlines assessment, directly or indirectly fail to comply with the rules and
				conditions established herein.
			</li>
			<li>
				Information collected from participants is subject to the Copa Airlines Privacy Policy,
				which is found at <a href="https://www.copaair.com/es/web/pa/politica-privacidad"
					>https://www.copaair.com/es/web/pa/politica-privacidad</a
				>
			</li>
			<li>
				By accepting these terms and conditions, you expressly authorize Copa Airlines to collect
				all information necessary for the purpose of participating in the contest. The information
				you provide will be used only in connection with this contest, other promotional or other
				activities of Copa Airlines and Fondo de Promoci&oacute;n Tur&iacute;stica de Panam&aacute;
				(PROMTUR). Likewise, COPA AIRLINES is committed to make every effort to protect the personal
				data of participants in accordance with applicable data protection laws. All participants,
				by the mere fact of participating in this promotion, expressly authorize COPA AIRLINES to
				transfer to its affiliated companies and authorized representatives the information, data
				and documents provided by the participants.
			</li>
			<li>
				Given the inherent characteristics of the Internet environment, Copa Airlines will not be
				responsible for incomplete or failed computer transmissions or technical failures of any
				kind, including electronic malfunctions of any network, hardware or software, Internet
				availability and access, hacker access attempts, any incorrect or incomplete contest
				information, and any human, technical or other failures that may occur during the processing
				of entries, and therefore, any liability arising from such events or acts.
			</li>
			<li>
				Winners of this contest grant a perpetual, irrevocable, worldwide, non-exclusive license to
				Copa Airlines, and its authorized representatives, to reproduce, distribute and create
				derivative works from the participations or content published in connection with the contest
				and the promotion of the contest in any media now known or hereafter developed. This license
				is granted free of charge.
			</li>
			<li>
				Each participant waives all claims against Copa Airlines, Instagram, Facebook and each of
				their respective parents, affiliated companies, subsidiaries, officers, directors,
				employees, agents, licensees, distributors, dealers, retailers, publishers, representatives,
				and advertising and promotion agencies, and all other companies associated with this
				contest, and all of their respective officers, directors, employees, agents and
				representatives for any injury, damage or loss that may occur, directly or indirectly, in
				whole or in part, from participation in the contest or from the receipt or use of any prize
				(or any part thereof) or any travel or activity in connection with the receipt or use of any
				prize (or any part thereof).
			</li>
			<li>
				By participating in this contest, each participant agrees to fully exonerate and release
				Copa Airlines from all legal, administrative, commercial/civil or any other liability and
				agrees not to bring any claim and/or legal action against Copa Airlines in any court of law,
				administrative or judicial, or any other jurisdiction, as a result of acceptance of the
				prize and participation in the activities related to the prize.
			</li>
			<li>
				The terms and conditions of this contest are governed by the law of the Republic of Panama,
				and the Courts of the Republic of Panama shall have jurisdiction over all matters arising
				from the interpretation and/or fulfillment and/or development of this contest.
			</li>
			<li>
				The following are considered valid addresses for all purposes of this contest: the address
				of Compa&ntilde;&iacute;a Paname&ntilde;a de Aviaci&oacute;n, S.A. (Copa Airlines) located
				at Costa del Este Urbanization, Business Park Complex, North Tower, Panama City, Republic of
				Panama, and the addresses of the winners or alternates, as well as their companions, as
				stated by them in the Release of Liability/Publication Authorization/Consent of Personal
				Data Information.
			</li>
			<li>
				Instagram has no responsibilities in this contest and the data acquired will be managed by
				our company.
			</li>
			<li>
				Copa Airlines assumes no responsibility for the services provided by participating hotels.
				Any problem, concern, claim or incident arising during the hotel stay is the sole
				responsibility of the hotel indicated on the prize letter. Winner and any accompanying
				person understand and agree that Copa Airlines has no control over the actions, policies,
				services or conditions of the hotel.
			</li>
		</ol>
		<p>&nbsp;</p>
		<ol>
			<li><strong>NOTIFICATION OF WINNERS:</strong></li>
			<li>
				The winner will be notified via the e-mail address provided at the time of his/her
				participation in <strong>THE CONTEST</strong>, or other channels that Copa Airlines decides
				to implement.
			</li>
			<li>
				The e-mail notification to the winner will include a letter of release of liability, a
				letter of acceptance of prize and any other letter that Copa Airlines may require,
				indicating that the winner has been awarded <strong>THE PRIZE</strong>, such letters must be
				signed on each page by the winner and his/her companion.
			</li>
			<li>
				The winner must send the letter of release of liability, the letter of acceptance of prize,
				the valid passports of him/her and his/her companion, a proof of residence in the country
				(electricity, gas, water, telephone bill) and any other document required by Copa Airlines,
				to <a href="mailto:promociones@copaair.com">promociones@copaair.com</a>
				or any other means requested by Copa Airlines, within twenty-four (24) hours after being notified
				as winner of <strong>THE CONTEST</strong>, in order to accept
				<strong>THE PRIZE</strong>.
			</li>
			<li>
				If any of the winners does not respond to the e-mail and/or does not send the information
				required by Copa Airlines within the period indicated, he/she will forfeit <strong
					>THE PRIZE</strong
				> and the next runner-up will be considered the new winner, without this being a default by Copa
				Airlines.
			</li>
			<li>
				Any response after 24 hours will be considered void and the participant will not be entitled
				to any present or future claims against Copa Airlines.
			</li>
			<li><strong>THE PRIZE</strong></li>
			<li>
				Two (2) Round Trip Tickets, one for the winner and one for his/her companion, through Copa
				Airlines to travel to Panama City, Republic of Panama, from any of the destinations where
				Copa Airlines operates.
			</li>
			<li>
				One (1) 3-night double room stay in a 3-star or 4-star hotel in the Republic of Panama
				(restrictions and terms and conditions of each hotel will apply).
			</li>
		</ol>
		<p>&nbsp;</p>
		<ol>
			<li><strong>PRIZE RESTRICTIONS </strong></li>
		</ol>
		<p><strong>Airline Ticket Restrictions:</strong></p>
		<ol>
			<li>
				The tickets will be valid from October 25<sup>th</sup>, 2023 to December 31<sup>st</sup>,
				2024, period within which the issuance and travel (round trip) of the totality of the
				granted tickets must be carried out.
			</li>
			<li>
				The winner and his/her travel companion must begin and end the trip on the same dates; they
				must travel together at all times.
			</li>
			<li>
				Once the tickets have been issued, it will not be possible to change the name on the
				tickets.
			</li>
			<li>Tickets are valid for travel on COPA AIRLINES in Economy Class.</li>
			<li>
				Once the reservation has been issued, you must go to one of our customer service centers
				within 48 hours to pay the taxes and issue the reservation tickets.
			</li>
			<li>
				Tickets cannot be used during high season. The high season period includes the following
				dates: Carnivals in Panama, Easter, June 15 to August 31, Panamanian National Holidays,
				Thanksgiving in the United States, Christmas and New Year's Day.
			</li>
			<li>
				Copa Airlines is not responsible for the payment of government and/or airport taxes of the
				cities of origin and destination related to the airline tickets. Such taxes must be paid in
				cash at the time tickets are issued.
			</li>
			<li>
				Tickets are not transferable, refundable in cash or transferable to other airlines. They
				cannot be sold, exchanged or extended after the expiration date, nor are rerouting allowed.
			</li>
			<li>
				Only one change of date will be allowed, such change will be subject to availability and the
				same conditions set forth herein shall apply. The validity date of the ticket may not be
				extended, in other words, the requested change must be made within the validity period
				indicated in numeral 1 of this section.
			</li>
			<li>
				It is necessary to request tickets at least thirty (30) days prior to the date of travel.
				COPA AIRLINES does not guarantee flight availability.
			</li>
			<li>
				This Agreement does not contemplate baggage exemption or discount on overweight. The baggage
				allowance, that is, limit, weight and dimensions of the baggage, will be those in effect at
				the time of ticket redemption for the corresponding fare class, it will be the
				responsibility of each winner to validate the current allowance.
			</li>
			<li>
				Due to availability reasons, COPA AIRLINES cannot guarantee that your baggage will be sent
				on your assigned flight and may arrive at times different from your arrival time.
			</li>
			<li>
				COPA AIRLINES is not responsible for the documentation, papers or identifications that each
				passenger needs in order to travel.
			</li>
			<li>
				Expenses incurred by the winner and his/her companion during the trip to Panama City will
				not be the responsibility of Copa Airlines.
			</li>
			<li>
				Notwithstanding the foregoing, in the event that in the future COPA AIRLINES does not
				continue to operate its services to the origin from which the winner will travel, the winner
				and his/her companion will not be entitled to any type of compensation, and in such
				circumstances must fly from a different destination where COPA AIRLINES has operations.
			</li>
			<li>
				The airline tickets that are part of the Prizes of this contest do not accrue miles of the
				Copa Airlines frequent flyer program, ConnectMiles, or of the member airlines of the Star
				Alliance network. They are also not valid for status changes or upgrades in these loyalty
				programs.
			</li>
			<li>
				Passengers traveling are responsible for complying with applicable laws and health
				requirements of each destination visited.
			</li>
			<li>
				Flights subject to restrictions, government approvals and changes. Some countries maintain
				entry restrictions. It is the responsibility of the winner and his/her companion to verify
				immigration, biosecurity and health requirements to enter any of our destinations (Copa
				Airlines).
			</li>
			<li>
				Any injury, loss or damage (direct, indirect or consequential) caused to THE WINNER,
				companion or their property due to their fault or negligence or any cause not attributable
				to Copa Airlines, in connection with the acceptance, use and enjoyment of the tickets is the
				sole responsibility of THE WINNER. Even if the injury, loss or damage arises from force
				majeure.
			</li>
			<li>
				It is the sole responsibility of the winner and his/her companion to have all the necessary
				documentation to be able to travel, including, but not limited to passports, visas and any
				other required documents, according to the applicable laws, and it is an indispensable
				requirement to participate in this contest to have a valid passport. Likewise, it is the
				sole responsibility of the winner and his/her companion to verify that their documentation
				complies with all the necessary requirements to be able to use it effectively at the time of
				travel, since, if these requirements are not met, the winners will be disqualified, without
				the right to any present or future claim of any kind.
			</li>
			<li>
				In the event that the companion is a minor and is not traveling with a parent, the parents
				with parental authority or legal guardian must provide proof of identification and
				relationship with the minor and also have complied with the exit permit for the minor as
				required by the Immigration Authority in accordance with the legislation of each country of
				residence; or in its absence, the authorization of the minor's trip in writing. The
				consequences derived from the non-fulfillment of the requirements established in this point,
				will be the direct responsibility of the winners.
			</li>
			<li>
				If the place of residence of the winner and his/her companion is not a city where Copa
				Airlines operates, the winner and his/her companion must travel by their own means to a city
				where Copa Airlines operates and then travel by their own means to their place of residence.
			</li>
			<li>
				Copa Airlines is not responsible in the event that the winner or companion is unable to
				travel on the permitted dates.
			</li>
			<li>
				In case of "No Show" (passenger does not arrive at takeoff time or in time to board) Copa
				Airlines is not responsible and the winner and his/her companion will not have the right to
				request a new travel date.
			</li>
			<li>
				Any delay, flight cancellation, rerouting or operational change due to reasons based on the
				protection of human life, security or adverse weather conditions, or other acts of God or
				force majeure, will not be considered a breach of the contract of carriage or the terms and
				conditions of this contest, nor will it imply any liability of any kind for Copa Airlines.
				In addition, the winner acknowledges and accepts this provision prior to actual acceptance
				of the awarded tickets.
			</li>
		</ol>
		<p>&nbsp;</p>
		<p><strong>Restrictions on stays at participating hotels:</strong></p>
		<ol>
			<li>
				By accepting the hotel stay prize, the winner and any companion release COPA AIRLINES,
				affiliates, employees and agents from any liability in connection with the hotel stay
				indicated including, but not limited to, personal injury, property damage, losses, expenses,
				claims or demands of any kind that may arise as a result of the stay.
			</li>
			<li>
				Stays that are part of the Prizes in this contest do not accrue Marriott Bonvoy or Wyndham
				Rewards loyalty program points. Nor do benefits apply based on loyalty program status.
			</li>
			<li>
				The prize includes a 3-night double occupancy standard room stay at a participating 3 to 4
				star hotel within the territory of the Republic of Panama. Copa Airlines reserves the right
				to assign any of the participating hotels based on availability. The prize is not
				transferable or redeemable for cash or other products.
			</li>
			<li>
				The hotel stay includes daily breakfast in the restaurant, internet access in the room and
				public areas, use of the gym and spa at the indicated times (extra charges may apply for the
				use of the spa).
			</li>
			<li>
				Copa Airlines reserves the right to modify, cancel or discontinue the hotel stay prize at
				any time and for any reason. In the event the prize is modified or canceled, Copa Airlines
				assumes no liability to participants or winner.
			</li>
			<li>
				Any damage caused by the winner or his/her companions to the assigned hotel facilities or to
				other guests will be the sole responsibility of the winner. Copa Airlines will not assume
				any cost or liability for such damages.
			</li>
			<li>
				The winner and his/her companion agree and acknowledge that each hotel has its own terms,
				conditions and rules governing the stay and use of its facilities. Some of these terms are
				included herein, but not limited to. The winner and any accompanying person agree that Copa
				Airlines is not responsible for the rules and conditions of each hotel and that it is their
				responsibility to review and comply with them.
			</li>
			<li>
				Any expenses incurred by the winner and his/her companion within the hotel facilities will
				be the sole responsibility of the winner and his/her companion.
			</li>
			<li>
				Copa Airlines reserves the right to randomly assign one of the participating hotels for the
				stay. Winner and any accompanying person accept this assignment and understand that they may
				not request hotel changes.
			</li>
		</ol>
		<p>&nbsp;</p>
		<p><strong>Terms and Conditions Grupo Verde Azul</strong></p>
		<p><strong><u>Policies and Conditions </u></strong></p>
		<ol>
			<li>
				Stay for 2 (two) people with daily breakfast in restaurant, internet access in public areas
				and room, access to common areas (pool and gym). Children up to 11 years old have breakfast
				included in the rate.
			</li>
			<li>
				The prize of this contest may be used from October 25, 2023 to December 31, 2024.
				Reservations are subject to availability.
			</li>
			<li>
				Maximum occupancy in room for 2 (two) adults and 2 (two) children up to 11 (eleven) years
				old, in existing beds. Children up to 11 (eleven) years old free in room accompanied by an
				adult.
			</li>
			<li>Cancellation until 6:00 p.m. 3 (three) days prior to arrival.</li>
			<li>In case of no show, the stay will be forfeited.</li>
			<li>
				A change of date of the original reservation will be allowed, subject to room availability.
			</li>
			<li>
				Additional changes will be charged a fee of USD75.00 plus hotel taxes (10%) per change (not
				deductible from hotel expenses or refundable).
			</li>
			<li>
				Additional person has a cost of USD20.00 per night plus hotel taxes (10%) and applies for
				the following hotels: Marriott Panama, Bristol Panama, Villa Marina, The Santa Maria a
				Luxury Collection Hotel &amp; Golf Resort. The Buenaventura Golf &amp; Beach Resort -
				Autograph Collection has a cost of USD75.00 for additional person per night plus hotel taxes
				(10%). An additional person is any person 12 (twelve) years old and older staying with 2
				(two) adults over 18 (eighteen) years old. Pet Policy: Marriott Panama up to 2 (two) pets
				per room (dogs or cats) with an additional cost of USD75.00 plus ITBMS (7%) per pet per
				room. The Buenaventura Golf &amp; Beach Resort Panama - Autograph Collection one pet up to
				20 (twenty) pounds or 9 (nine) kilos per room at a cost of USD100.00 plus hotel tax (10%)
				per room. Villa Marina up to 2 (two) pets per room with an additional cost of USD35 plus
				hotel taxes (10%) per pet per room.
			</li>
			<li>
				A method of guarantee (valid credit card or cash - amount varies per hotel) will be
				requested at check in to cover extra expenses. In the event that a guarantee is not
				presented, any expenses incurred within the hotel must be paid at check-in.
			</li>
			<li>Check in time starts at 3:00 p.m. and check out time is 12:00 noon.</li>
			<li>
				Special requests such as crib, extra bed, connecting or adjoining rooms or other requests
				must be informed prior to arrival and will be subject to availability.
			</li>
			<li>
				Stays cannot be used during high season. The high season period includes the following
				dates: Carnival in Panama, Easter, June 15 to August 31, National Holidays in Panama,
				Thanksgiving in the United States, Christmas and New Year's Day.
			</li>
		</ol>
		<p>&nbsp;</p>
		<p><strong><u>Policy and Conditions- Marriot Panama</u></strong></p>
		<ol>
			<li>Blackout dates: October 18 - 27, 2023, November 6 - 8, 2023, November 13 - 17, 2023.</li>
			<li>Additional blackout dates may apply. Please inquire directly with the property.</li>
			<li>
				Special requests and changes should be sent to the e-mail <a
					href="mailto:reservations@marriottpanamahotel.com">reservations@marriottpanamahotel.com</a
				>, with the reservation information.
			</li>
		</ol>
		<p><strong><u>&nbsp;</u></strong></p>
		<p><strong><u>Policy and Conditions - Villa Marina Lodge &amp; Condos</u></strong></p>
		<ol>
			<li>
				Blackout dates: November 1 to 30, 2023, December 8 to 10, 2023, December 22 to 31, 2023,
				January 1 to 6, 2024, January 9 to 13, 2024, February 9 to 13, 2024, March 28 to 30, 2024.
				Panama School Vacation 2024.
			</li>
			<li>Additional blackout dates may apply. Please inquire directly with the property.</li>
			<li>
				Special requests and changes should be sent to the e-mail <a
					href="mailto:reservations@villamarina.com.pa">reservations@villamarina.com.pa</a
				>, with the reservation information.
			</li>
		</ol>
		<p>&nbsp;</p>
		<p>
			<strong
				><u>Policy and Conditions - The Santa Maria a Luxury Collection Hotel &amp; Golf Resort:</u
				></strong
			>
		</p>
		<ol>
			<li>
				Blackout dates: October 2 to 5, 2023, December 22 to 31, 2023, January 1 and 2, 2024,
				January 15 to 21, 2024, February 28 and 29, 2024, March 13 to 15, 2024.
			</li>
			<li>Additional blackout dates may apply. Please inquire directly with the property.</li>
			<li>
				Special requests and changes should be sent to the e-mail <a
					href="mailto:reservations@thesantamariahotel.com">reservations@thesantamariahotel.com</a
				>, with the reservation information.
			</li>
		</ol>
		<p>&nbsp;</p>
		<p>
			<strong><u>Pol&iacute;ticas y condiciones - Bristol Panama a Registry Collection:</u></strong>
		</p>
		<ol>
			<li>Blackout dates: November 17 to 25, 2023, December 29 and 30, 2023.</li>
			<li>Additional blackout dates may apply. Please inquire directly with the property.</li>
			<li>
				Special requests and changes should be sent to the e-mail <a
					href="mailto:reservations@bristolpanama.com">reservations@bristolpanama.com</a
				>, with the reservation information.
			</li>
		</ol>
		<p>&nbsp;</p>
		<p>
			<strong
				><u
					>Pol&iacute;ticas y condiciones - The Buenaventura Golf &amp; Beach Resort - Autograph
					Collection:</u
				></strong
			>
		</p>
		<ol>
			<li>
				Blackout dates: November 3 to 5, 2023, November 10 and 11, 2023, December 8 and 9, 2023,
				December 23 to 31, 2023, January 1 to 3, 2024, February 5 and 6, 2024, February 10 to 17,
				2024, March 1 to 31, 2024, April 18 to 20, 2024; April 22 to 29, 2024.
			</li>
			<li>Additional blackout dates may apply. Please inquire directly with the property.</li>
			<li>
				Special requests and changes should be sent to the e-mail <a
					href="mailto:reservations@buenaventuraresort.com">reservations@buenaventuraresort.com</a
				>, with the reservation information.
			</li>
		</ol>
		<p>&nbsp;</p>
		<p><strong>Terms and Conditions Hoteles Grupo Bern</strong></p>
		<ol>
			<li>
				Stay for 2 people with breakfast included daily, internet access in public areas and room,
				access to common areas (pool and gym). Maximum occupancy in room for 2 adults.
			</li>
			<li>
				Cancellation: Cancellation can be made, but you will only have 4 more months to use it.
			</li>
			<li>
				In case of no show, specify no show policy: In case of no show the guest when he/she wants
				to use it again, he/she will only be able to do it 1 night, the other one will be lost.
			</li>
			<li>
				Three date changes will be allowed for the reservation, subject to room availability.
				Additional changes will be charged $25 per change. Additional person has a cost of: $20 in
				city hotels and $95 in resorts such as Gamboa and Westin Playa Bonita.
			</li>
		</ol>
		<ol start="5">
			<li>Pets are not allowed</li>
			<li>
				A method of guarantee (valid credit card or cash - amount varies per hotel) will be
				requested at check in to cover extra expenses. In the event that a guarantee is not
				presented, any expenses incurred within the hotel must be paid at check-in.
			</li>
			<li>Check in time starts at 3:00 p.m. and check out time is 12:00 noon.</li>
			<li>
				Stays at this hotel cannot be used on: Panama National Holiday (Nov. 1 - 7, Nov 10 and Nov
				28 2023), Christmas and New Year's Day (Dec. 22 - Jan. 2, 2024), Carnivals in Panama (Feb. 9
				- 13, 2024) and Easter Week (March 27 - 31, 2024).
			</li>
			<li>Other restrictions may apply.</li>
			<li>Subject to availability</li>
		</ol>
		<p>&nbsp;</p>
		<p>
			Compa&ntilde;&iacute;a Paname&ntilde;a de Aviaci&oacute;n, S.A. (Copa Airlines) reserves the
			right to cancel this contest at any time and for any reason. It also reserves the right to
			modify the dates and/or terms of the contest at any time. In which case it shall duly inform
			the participants.
		</p>
		<p>&nbsp;</p>
		<p>&nbsp;</p>
		<p>&nbsp;</p>
		<p>&nbsp;</p>
	</div>
{:else if language === 'es'}
	<div class="pt-64 pb-32 text-grey-0 bg-primary">
		<div class="container mx-auto mt-32">
			<h1>
				T&eacute;rminos y Condiciones: &ldquo;Concurso <strong
					>DESTINO FINAL PANAM&Aacute;&rdquo;</strong
				>
			</h1>
		</div>
	</div>
	<div class="container mx-auto my-32">
		<p>
			&iexcl;Concurso <strong>DESTINO FINAL PANAM&Aacute;</strong>! (en adelante &ldquo;<strong
				>EL CONCURSO</strong
			>&rdquo;) En nuestra cuenta de Instagram podr&aacute;s convertirte en uno de los ganadores de
			(2) Boletos Ida y Vuelta con destino final Panam&aacute;, uno para el ganador y uno para su
			acompa&ntilde;ante,&nbsp;a trav&eacute;s de Copa Airlines y 3 noches de hotel para dos
			personas.
		</p>
		<ol>
			<li><strong>DIN&Aacute;MICA DEL CONCURSO </strong></li>
			<li>
				Por un per&iacute;odo de 15 d&iacute;as tendr&aacute;s la oportunidad de responder trivias
				para acumular la mayor cantidad de puntos en el menor tiempo posible.
				Podr&aacute;s&nbsp;participar&nbsp;una&nbsp;sola&nbsp;vez,&nbsp;por&nbsp;lo
				que&nbsp;asegurate&nbsp;de&nbsp;hacerlo&nbsp;bien.
			</li>
			<li>
				Las trivias estar&aacute;n publicadas en el link <a href="http://www.destinopanamacopa.com"
					>destinopanamacopa.com</a
				> de manera aleatoria, durante dos semanas a partir de la semana del 18 de septiembre de 2023.
			</li>
			<li>Se elegir&aacute;n 10 ganadores</li>
			<li>
				Cada ganador recibir&aacute; dos (2) Boletos Ida y Vuelta, Uno Para El Ganador y Uno Para Su
				Acompa&ntilde;ante con destino final Panam&aacute;,&nbsp;a trav&eacute;s de Copa Airlines
				para viajar desde cualquiera de los destinos donde opera Copa Airlines y una estad&iacute;a
				en habitaci&oacute;n doble de 3 noches en hoteles en la Rep&uacute;blica de Panam&aacute; de
				3 estrellas o 4 estrellas (en adelante <strong>&ldquo;EL PREMIO&rdquo;).</strong>
			</li>
		</ol>
		<ol>
			<li><strong>&iquest;C&Oacute;MO PARTICIPAR?</strong></li>
			<li>
				S&iacute;guenos en nuestra cuenta oficial de Instagram <a
					href="https://www.instagram.com/CopaAirlines/">@CopaAirlines</a
				>
			</li>
			<li>
				Dale &ldquo;ME GUSTA&rdquo; (like) a la publicaci&oacute;n oficial del concurso (en adelante
				&ldquo;<strong>POST OFICIAL</strong>&rdquo;) publicada en nuestra cuenta oficial de
				Instagram
				<a href="https://www.instagram.com/CopaAirlines/">@CopaAirlines</a>
			</li>
			<li>
				Visitar el enlace (link) <a href="http://www.destinopanamacopa.com">destinopanamacopa.com</a
				>
				que encontrara disponible en la Biograf&iacute;a de nuestra cuenta oficial
				<a href="https://www.instagram.com/CopaAirlines/">@CopaAirlines</a>
				en Instagram ,nuestras historias o en <strong>POST OFICIAL</strong> que los llevar&aacute; a
				la p&aacute;gina oficial del concurso en donde encontrar&aacute;s preguntas sobre Panam&aacute;.
			</li>
			<li>
				Las 10 personas en responder correctamente, la mayor cantidad de preguntas, en menor tiempo
				ser&aacute;n los ganadores.
			</li>
		</ol>
		<ol>
			<li><strong>T&Eacute;RMINOS Y CONDICIONES</strong></li>
		</ol>
		<p>
			<strong
				>NO ES NECESARIA UNA COMPRA O PAGO DE CUALQUIER TIPO PARA PARTICIPAR EN ESTE CONCURSO.</strong
			>
		</p>
		<ol>
			<li>
				Al momento de participar aceptan y reconocen los t&eacute;rminos y condiciones de <strong
					>EL CONCURSO.</strong
				>
			</li>
			<li>
				Este concurso es organizado por Compa&ntilde;&iacute;a Paname&ntilde;a de Aviaci&oacute;n,
				S.A. (Copa Airlines), cuya casa matriz se encuentra en Urbanizaci&oacute;n Costa del Este,
				Complejo Business Park, Torre Norte, ciudad de Panam&aacute;, Rep&uacute;blica de
				Panam&aacute;.
			</li>
			<li>
				El Concurso est&aacute; abierto a personas que tengan (18) a&ntilde;os de edad o m&aacute;s
				en el momento de la inscripci&oacute;n. Copa Airlines tienen el derecho de verificar la
				elegibilidad de cada participante.
			</li>
			<li>
				El Concurso solo aplicara para pa&iacute;ses donde Copa Airlines mantenga operaciones, salvo
				restricciones aqu&iacute; establecidas.
			</li>
			<li>
				Chile: <strong
					>&ldquo;Bases del concurso protocolizadas con fecha 14 de septiembre de 2023 en la
					Notar&iacute;a de Santiago de don Juan Ricardo San Mart&iacute;n Urrejola&rdquo;.</strong
				>
			</li>
			<li>
				<strong
					>No aplica para los siguientes pa&iacute;ses: Estados Unidos, Brasil, Bolivia y
					Panam&aacute;.</strong
				>
			</li>
			<li>
				El participante deber&aacute; ser seguidor de la cuenta de Instagram&nbsp;@CopaAirlines.
			</li>
			<li>S&oacute;lo se aceptar&aacute; una entrada (participaci&oacute;n) por usuario.</li>
			<li>
				Todo usuario que no siga todos los pasos y cumpla con todos los requisitos requeridos por
				Copa Airlines quedar&aacute; autom&aacute;ticamente eliminado del concurso.
			</li>
			<li>
				Cualquier perfil que tengan m&aacute;s de diez mil seguidores (10,000), cuentas de mascotas,
				cualquier cuenta utilizadas para fines comerciales o fines empresariales, a nombre de una
				persona jur&iacute;dica, o que se detecte como falsa o que cometa actos fraudulentos se
				eliminar&aacute; del concurso.
			</li>
			<li>
				Se escoger&aacute;n 10 ganadores, las 10 personas que respondan correctamente la mayor
				cantidad de preguntas, en menor tiempo y cumplan con los requisitos establecidos en el
				presente documento ser&aacute;n los ganadores. Los ganadores ser&aacute;n anunciados a
				trav&eacute;s de nuestra cuenta oficial de Instagram <a
					href="https://www.instagram.com/CopaAirlines/">@CopaAirlines</a
				> y cualquier otra red oficial que Copa Airlines considere.
			</li>
			<li>
				Los ganadores ser&aacute;n anunciados en un per&iacute;odo no mayor a siete (7) d&iacute;as
				calendarios contados a partir de la finalizaci&oacute;n del concurso.
			</li>
			<li>
				Este concurso no aplica para los empleados de Compa&ntilde;&iacute;a Paname&ntilde;a de
				Aviaci&oacute;n, S.A. (Copa Airlines), Aerorep&uacute;blica, S.A., Copa Airlines Colombia y
				La Nueva Aerol&iacute;nea, S.A., y sucursales, proveedores de estas empresas, ni empleados
				de las agencias de publicidad, empleados de Grupo de hoteles Verde Azul y de Grupo Bern
				influencers o creadores de contenido que mantengan acuerdos comerciales con las mismas.
			</li>
			<li>
				Cualquier da&ntilde;o o p&eacute;rdida (directa, indirecta o consecuente) ocasionada al
				ganador o su acompa&ntilde;ante o propiedad debido a la propia falta o negligencia de
				&eacute;stos o por cualquier causa no imputable a Copa Airlines, en relaci&oacute;n con su
				participaci&oacute;n en el concurso o la aceptaci&oacute;n, uso y disfrute de los premios,
				es de la exclusiva responsabilidad del ganador o su acompa&ntilde;ante o cualquier persona
				que vaya como acompa&ntilde;ante del ganador.
			</li>
			<li>
				Cualquier intento de quebrantar cualquiera de las reglas del concurso, o de dar
				informaci&oacute;n falsa con la intenci&oacute;n de defraudar, ser&aacute; procesado
				conforme a las leyes vigentes. Al participar en este concurso, los participantes acuerdan y
				aceptan la estricta aplicaci&oacute;n de estas reglas en todos los t&eacute;rminos.
				Cualquier participaci&oacute;n que sea alterada, falsificada o de otra manera manipulada
				para pretender ser el ganador ser&aacute; anulada. Los participantes son los &uacute;nicos
				responsables de cualquier situaci&oacute;n presente o futura que acontezca debido a la
				propia falta o negligencia de &eacute;stos o por cualquier causa no imputable a Copa
				Airlines, con relaci&oacute;n a su participaci&oacute;n en este concurso o que surja con la
				aceptaci&oacute;n de los premios o del uso de los premios que comprende el concurso.
			</li>
			<li>
				El ganador y su acompa&ntilde;ante le conceden a Copa Airlines y a sus agencias de
				publicidad y relaciones p&uacute;blicas el derecho de publicar o anunciar su nombre y a
				utilizar fotograf&iacute;as o videograbaciones que incluyan su imagen o su voz, en cualquier
				medio publicitario sin compensaci&oacute;n alguna, dentro o fuera del territorio
				paname&ntilde;o, en cualquier medio de publicidad o comunicaci&oacute;n existente o por
				existir y por plazo de dos a&ntilde;os contados a partir de la notificaci&oacute;n donde se
				le notifica como ganador del concurso.
			</li>
			<li>
				Como requisito de aceptaci&oacute;n del premio, el ganador y su acompa&ntilde;ante
				suscribir&aacute; una carta de aceptaci&oacute;n al premio, un relevo de responsabilidad y
				cualquier otro documento requerido por Copa Airlines, con respecto a los t&eacute;rminos y
				condiciones en relaci&oacute;n a la aceptaci&oacute;n y uso de los premios que le
				ser&aacute; provisto por Copa Airlines.
			</li>
			<li>
				Se descalificar&aacute; a cualquier individuo que se encuentre haciendo cambios a los
				procesos de las operaciones del concurso o violando las leyes oficiales y que no cumpla con
				las condiciones establecidas en el presente reglamento.
			</li>
			<li>
				Compa&ntilde;&iacute;a Paname&ntilde;a de Aviaci&oacute;n S.A. (Copa Airlines), se reserva
				el derecho de descalificar o exigir la devoluci&oacute;n de los beneficios otorgados a
				aquellos participantes que, a juicio de Copa Airlines, directa o indirectamente incumplieran
				las normas y condiciones aqu&iacute; establecidas.
			</li>
			<li>
				La informaci&oacute;n recolectada de los participantes se encuentra sujeta a la
				Pol&iacute;tica de Privacidad del Copa Airlines, que se encuentra en <a
					href="https://www.copaair.com/es/web/pa/politica-privacidad"
					>https://www.copaair.com/es/web/pa/politica-privacidad</a
				>
			</li>
			<li>
				Por medio de la aceptaci&oacute;n de estos t&eacute;rminos y condiciones, se autoriza de
				forma expresa a Copa Airlines a reunir toda la informaci&oacute;n que sea necesaria a los
				efectos de la participaci&oacute;n en el concurso. La informaci&oacute;n que usted provea
				ser&aacute; utilizada solamente en relaci&oacute;n con el presente concurso u otras
				actividades promocionales o de otro tipo de Copa Airlines y del Fondo de Promoci&oacute;n
				Turistica de Panam&aacute; (PROMTUR). Asimismo, COPA AIRLINES se compromete a realizar todos
				sus esfuerzos para proteger los datos personales de los participantes conforme a las leyes
				de Protecci&oacute;n de datos vigentes que puedan aplicar. Todo participante por el solo
				hecho de participar en la presente promoci&oacute;n autoriza expresamente a COPA AIRLINES a
				transferir a sus empresas afiliadas y representantes autorizados las informaciones, datos y
				documentos que sean facilitados por los participantes.
			</li>
			<li>
				Teniendo en cuenta las caracter&iacute;sticas inherentes al ambiente de Internet, Copa
				Airlines no ser&aacute; responsable por transmisiones de computadora que est&eacute;n
				incompletas o que fallen, como tampoco por fallas t&eacute;cnicas de ning&uacute;n tipo,
				inclusive, al mal funcionamiento electr&oacute;nico de cualquier red, "hardware" o
				"software", la disponibilidad y acceso a Internet, intentos de acceso de
				&ldquo;hackers&rdquo; como tampoco a cualquier informaci&oacute;n incorrecta o incompleta
				sobre el concurso y a cualquier falla humana, t&eacute;cnica o de cualquier otro tipo, que
				pueda ocurrir durante el procesamiento de las inscripciones, por consiguiente, de cualquier
				responsabilidad proveniente de tales hechos o actos.
			</li>
			<li>
				Los ganadores de este concurso otorgan una licencia perpetua, irrevocable, mundial y no
				exclusiva a Copa Airlines, y sus representantes autorizados para reproducir, distribuir y
				crear trabajos derivados de las participaciones o contenidos publicados en relaci&oacute;n
				con el concurso y la promoci&oacute;n del mismo en cualquier medio conocido ahora o en el
				futuro. Esta licencia se otorga a t&iacute;tulo gratuito.
			</li>
			<li>
				Cada participante renuncia a todas las reclamaciones contra Copa Airlines, Instagram,
				Facebook y cada uno de sus respectivos padres, compa&ntilde;&iacute;as afiliadas,
				subsidiarias, oficiales, directores, empleados, agentes, licenciatarios, distribuidores,
				concesionarios, minoristas, impresores. , representantes y agencias de publicidad y
				promoci&oacute;n, y todas las dem&aacute;s compa&ntilde;&iacute;as asociadas con este
				concurso, y todos sus respectivos funcionarios, directores, empleados, agentes y
				representantes por cualquier lesi&oacute;n, da&ntilde;o o p&eacute;rdida que pueda ocurrir,
				directa o indirectamente, en su totalidad o en parte, a partir de la participaci&oacute;n en
				el concurso o del recibo o uso de cualquier premio (o parte del mismo) o cualquier viaje o
				actividad relacionada con la recepci&oacute;n o el uso de cualquier premio (o cualquier
				parte del mismo).
			</li>
			<li>
				Al participar en este concurso, cada participante acepta exonerar y liberar totalmente de
				toda responsabilidad legal, administrativa, comercial/civil o de cualquier otra
				&iacute;ndole a Copa Airlines y se compromete a no entablar ante tribunales de cualquier
				naturaleza, sean administrativos o judiciales, o bien de cualquier otra jurisdicci&oacute;n,
				reclamo o acci&oacute;n legal alguna contra Copa Airlines como consecuencia de la
				aceptaci&oacute;n del premio y participaci&oacute;n en las actividades relacionadas al
				mismo.
			</li>
			<li>
				Los t&eacute;rminos y condiciones del presente concurso se rigen por la ley de la
				Rep&uacute;blica de Panam&aacute;, resultando competente los Juzgados de dicho pa&iacute;s,
				en todo lo que suscite la interpretaci&oacute;n o cumplimiento o desarrollo de este
				concurso.
			</li>
			<li>
				Se consideran domicilios v&aacute;lidos a todos los efectos de este concurso: el de
				Compa&ntilde;&iacute;a Paname&ntilde;a de Aviaci&oacute;n, S.A. (Copa Airlines) ubicado en
				Urbanizaci&oacute;n Costa del Este, Complejo Business Park, Torre Norte, ciudad de
				Panam&aacute;, Rep&uacute;blica de Panam&aacute; y el de los ganadores, titulares o
				suplentes, como sus acompa&ntilde;antes, los que ellos denuncien en la Exenci&oacute;n de
				Responsabilidad/Autorizaci&oacute;n de Publicaci&oacute;n/ consentimiento de
				informaci&oacute;n sobre datos personales.
			</li>
			<li>
				Instagram no tiene responsabilidades en este concurso y los datos que se adquieran
				ser&aacute;n gestionados por nuestra empresa.
			</li>
			<li>
				Copa Airlines no asume ninguna responsabilidad por los servicios proporcionados por los
				hoteles participantes. Cualquier problema, inquietud, reclamaci&oacute;n o incidente que
				surja durante la estad&iacute;a en el hotel es responsabilidad exclusiva del hotel indicado
				en la carta premio. El ganador y cualquier acompa&ntilde;ante entienden y aceptan que Copa
				Airlines no tiene control sobre las acciones, pol&iacute;ticas, servicios o condiciones del
				hotel.
			</li>
		</ol>
		<ol>
			<li><strong>NOTIFICACI&Oacute;N DE LOS GANADORES:</strong></li>
			<li>
				El ganador ser&aacute; notificado a trav&eacute;s del correo electr&oacute;nico
				proporcionado al momento de su participaci&oacute;n en <strong>EL CONCURSO,</strong> u otros
				canales que Copa Airlines decida implementar.
			</li>
			<li>
				En el correo electr&oacute;nico de notificaci&oacute;n al ganador se adjuntar&aacute; una
				carta de Relevo de responsabilidad, una carta de aceptaci&oacute;n de premio y cualquier
				otro que Copa Airlines requiera, indic&aacute;ndole que fue acreedor a <strong
					>EL PREMIO</strong
				>, dichas cartas deber&aacute;n ser firmadas en cada p&aacute;gina por &eacute;l ganador y
				su acompa&ntilde;ante.
			</li>
			<li>
				El ganador deber&aacute; enviar la carta de Relevo de responsabilidad, la carta de
				aceptaci&oacute;n de premio, los pasaportes vigentes de &eacute;l y su acompa&ntilde;ante,
				un comprobante de residencia del pa&iacute;s (Recibo de luz, gas, agua tel&eacute;fono) y
				cualquier otro documento requerido por Copa Airlines, al correo <a
					href="mailto:promociones@copaair.com">promociones@copaair.com</a
				>
				o cualquier otro medio solicitado por Copa Airlines, en un periodo no mayor a veinticuatro (24)
				horas, despu&eacute;s de haber sido notificados como ganador de
				<strong>EL CONCURSO,</strong>
				para aceptar<strong> EL PREMIO.</strong>
			</li>
			<li>
				Si alguno de los ganadores no responde el correo electr&oacute;nico o no env&iacute;a la
				informaci&oacute;n requerida por Copa Airlines, en el per&iacute;odo indicado,
				perder&aacute; <strong>EL PREMIO</strong> y el pr&oacute;ximo finalista ser&aacute; considerado
				como el nuevo ganador, sin que esto resulte un incumplimiento de Copa Airlines.
			</li>
			<li>
				Cualquier respuesta luego de las 24 horas ser&aacute; considerada nula y el participante no
				tendr&aacute; derecho a ninguna reclamaci&oacute;n presente o futura en contra de Copa
				Airlines.
			</li>
			<li><strong>PREMIO</strong></li>
			<li>
				Dos (2) Boletos Ida Y Vuelta, uno para el ganador y uno para su acompa&ntilde;ante, a
				trav&eacute;s de Copa Airlines para viajar a ciudad de Panam&aacute;, Rep&uacute;blica de
				Panam&aacute;, desde cualquiera de los destinos donde opera Copa Airlines.
			</li>
			<li>
				Una (1) estad&iacute;a en habitaci&oacute;n doble de 3 noches en hoteles en la
				Rep&uacute;blica de Panam&aacute; de 3 estrellas o 4 estrellas. (aplicar&aacute;n
				restricciones y t&eacute;rminos y condiciones de cada hotel)
			</li>
		</ol>
		<p><strong>RESTRICCIONES DEL PREMIO </strong></p>
		<p><strong>Restricciones de los boletos a&eacute;reos:</strong></p>
		<ol>
			<li>
				Los boletos ser&aacute;n v&aacute;lidos del 25 de octubre de 2023 al 31 de diciembre de 2024
				per&iacute;odo dentro del cual se deber&aacute; realizar la emisi&oacute;n y el viaje (ida y
				vuelta) de la totalidad de los boletos otorgados.
			</li>
			<li>
				El ganador y su acompa&ntilde;ante de viaje deben comenzar y finalizar el viaje en las
				mismas fechas; es decir, deben viajar juntos en todo momento.
			</li>
			<li>
				Una vez emitidos los boletos no se podr&aacute; realizar cambio de nombre en los mismos.
			</li>
			<li>
				Los boletos son v&aacute;lidos para viajar por COPA AIRLINES en Clase Econ&oacute;mica.
			</li>
			<li>
				Una vez emitida la reserva debe acercarse en un periodo no mayor a 48 horas a uno de
				nuestros centros de atenci&oacute;n al cliente a realizar el pago de impuestos y
				emisi&oacute;n de los boletos de la reserva.
			</li>
			<li>
				Los boletos no pueden ser utilizados durante temporada alta. El per&iacute;odo de temporada
				alta contempla las siguientes fechas: Carnavales en Panam&aacute;, Semana Santa, del 15 de
				junio al 31 de agosto, Fiestas Patrias en Panam&aacute;, Acci&oacute;n de Gracias en Estados
				Unidos, Navidad y A&ntilde;o Nuevo.
			</li>
			<li>
				Copa Airlines no se hace responsable del pago de impuestos gubernamentales o aeroportuarios
				de las ciudades de origen y destino que guarden relaci&oacute;n con los boletos
				a&eacute;reos. Dichos impuestos deber&aacute;n ser pagados en efectivo al momento de emitir
				los boletos.
			</li>
			<li>
				Los boletos no son transferibles, reembolsables en efectivo ni transmisibles a otras
				aerol&iacute;neas. No pueden ser vendidos, canjeados o extendidos luego de la fecha de
				expiraci&oacute;n ni se permiten cambios de ruta.
			</li>
			<li>
				Solo se permitir&aacute; cambio de fecha una sola vez, dicho cambio estar&aacute; sujeto a
				disponibilidad y aplicar&aacute;n las mismas condiciones aqu&iacute; establecidas. No se
				podr&aacute; extender la fecha de validez del boleto, es decir, el cambio solicitado
				deber&aacute; realizarse en el per&iacute;odo de validez indicado en el numeral 1 de esta
				secci&oacute;n.
			</li>
			<li>
				Es necesario solicitar los boletos con un m&iacute;nimo de treinta (30) d&iacute;as de
				anticipaci&oacute;n a la fecha de viaje. COPA AIRLINES no garantiza la disponibilidad de los
				vuelos.
			</li>
			<li>
				EL PREMIO no contempla la exoneraci&oacute;n de equipaje ni descuento en sobrepeso. La
				franquicia de equipaje, es decir, l&iacute;mite, peso y dimensiones del equipaje,
				ser&aacute;n los vigentes al momento del canje del pasaje para la clase tarifaria
				correspondiente, ser&aacute; obligaci&oacute;n de cada ganador validar la franquicia
				vigente.
			</li>
			<li>
				Por razones de disponibilidad, COPA AIRLINES no puede garantizar que su equipaje ser&aacute;
				enviado en su vuelo asignado y podr&aacute; llegar en horas distintas a la de su llegada a
				destino.
			</li>
			<li>
				COPA AIRLINES no se hace responsable de la documentaci&oacute;n, papeles o identificaciones
				que cada pasajero necesita para poder viajar.
			</li>
			<li>
				Los gastos incurridos por el ganador y su acompa&ntilde;ante durante el viaje a la ciudad de
				Panam&aacute;, no ser&aacute;n responsabilidad alguna de Copa Airlines.
			</li>
			<li>
				Sin perjuicio de lo anteriormente expuesto, en caso de que en un futuro COPA AIRLINES no
				siga operando sus servicios al origen desde el cual el ganador realizar&aacute; su viaje, el
				ganador y su acompa&ntilde;ante no tendr&aacute;n derecho a ning&uacute;n tipo de
				resarcimiento, debiendo en tales circunstancias volar desde un destino diferente donde COPA
				AIRLINES tenga operaciones.
			</li>
			<li>
				Los boletos a&eacute;reos que forman parte de los Premios de este concurso, no acumulan
				millas del programa de viajero frecuente de Copa Airlines, ConnectMiles, ni de las
				aerol&iacute;neas miembro de la red Star Alliance. Tampoco son v&aacute;lidos para cambios
				de status o ascensos en en estos programas de lealtad.
			</li>
			<li>
				Los pasajeros que viajen son responsables de cumplir con las leyes aplicables y
				requerimientos de salud de cada destino visitado.
			</li>
			<li>
				Vuelos sujetos a restricciones, aprobaciones gubernamentales y cambios. Algunos
				pa&iacute;ses mantienen restricciones de entrada. Es obligaci&oacute;n del ganador y su
				acompa&ntilde;ante verificar los requisitos migratorios, de bioseguridad y salud para
				ingresar a cualquiera de nuestros destinos (Copa Airlines).
			</li>
			<li>
				Cualquier lesi&oacute;n, p&eacute;rdida o da&ntilde;o (directo, indirecto o consecuente)
				causado a EL GANADOR, al acompa&ntilde;ante o a su propiedad debido a la culpa o negligencia
				de estos o por cualquier causa no atribuible a Copa Airlines, en relaci&oacute;n con la
				aceptaci&oacute;n, uso y disfrute de los boletos es responsabilidad exclusiva de EL GANADOR.
				Aun cuando las lesiones, p&eacute;rdidas o da&ntilde;os surjan por causas de fuerza mayor.
			</li>
			<li>
				Ser&aacute; exclusiva obligaci&oacute;n del ganador y su acompa&ntilde;ante tener toda la
				documentaci&oacute;n necesaria para poder viajar, incluyendo, pero sin limitarse a
				pasaportes, visas y cualquier otro documento requerido, seg&uacute;n las leyes que apliquen
				y es requisito indispensable para participar de este concurso tener pasaporte vigente.
				Igualmente, es de exclusiva obligaci&oacute;n del ganador y su acompa&ntilde;ante verificar
				que su documentaci&oacute;n cumpla con todos los requisitos necesarios para poder utilizarla
				efectivamente a la hora de viajar, ya que, de no cumplir con estos requisitos, los ganadores
				ser&aacute;n descalificados, sin derecho a reclamaci&oacute;n presente o futuro de
				ning&uacute;n tipo.
			</li>
			<li>
				En caso que el acompa&ntilde;ante sea menor de edad y no viaje con alguno de sus padres, los
				padres con patria potestad o tutor legal, deber&aacute;n suministrar prueba de
				identificaci&oacute;n y de relaci&oacute;n con el menor y adem&aacute;s haber cumplido con
				el permiso de salida del pa&iacute;s para el menor de edad que ordena la Autoridad
				Migratoria conforme a la legislaci&oacute;n de cada pa&iacute;s de residencia; o en su
				defecto la autorizaci&oacute;n del viaje del menor por escrito. Las consecuencias derivadas
				del incumplimiento de los requisitos establecidos en este punto, ser&aacute;n
				responsabilidad directa de los ganadores.
			</li>
			<li>
				En caso tal que el lugar de residencia del ganador y su acompa&ntilde;ante no sea una ciudad
				en donde Copa Airlines opere, los mismos deber&aacute;n trasladarse por sus propios medios
				hacia una ciudad donde opera Copa Airlines y posteriormente deber&aacute;n trasladarse por
				sus propios medios hacia su lugar de residencia.
			</li>
			<li>
				Copa Airlines no se hace responsable en caso que el ganador o su acompa&ntilde;ante no
				pudieran viajar en las fechas permitidas.
			</li>
			<li>
				En caso de &ldquo;No show&rdquo; (pasajero no llega a la hora del despegue o a tiempo para
				embarcar) Copa Airlines no se hace responsable y el ganador y su acompa&ntilde;ante no
				tendr&aacute;n derecho a solicitar una nueva fecha de viaje.
			</li>
			<li>
				Cualquier retraso, cancelaci&oacute;n de vuelo, desviaci&oacute;n de la ruta o cambio
				operacional que se deba a razones fundadas en la protecci&oacute;n de la vida humana, a
				motivos de seguridad o condiciones meteorol&oacute;gicas adversas u otras causas de caso
				fortuito o fuerza mayor, no se considerar&aacute;n como infracci&oacute;n del contrato de
				transporte ni de los t&eacute;rminos y condiciones de este concurso, ni implicar&aacute;n
				responsabilidad de ninguna &iacute;ndole, para Copa Airlines. Asimismo, el ganador reconoce
				y acepta la presente disposici&oacute;n previa a la aceptaci&oacute;n efectiva de los
				boletos otorgados.
			</li>
		</ol>
		<p><strong>Restricciones de las estad&iacute;as en los hoteles participantes:</strong></p>
		<ol>
			<li>
				Al aceptar el premio de la estad&iacute;a de hotel, el ganador y cualquier
				acompa&ntilde;ante liberan a COPA AIRLINES, afiliados, empleados y agentes de cualquier
				responsabilidad en relaci&oacute;n con la estad&iacute;a en el hotel indicado incluyendo,
				pero no limitado a, lesiones personales, da&ntilde;os a la propiedad, p&eacute;rdidas,
				gastos, reclamaciones o demandas de cualquier tipo que puedan surgir como resultado de la
				estad&iacute;a.
			</li>
			<li>
				Las estad&iacute;as que forman parte de los Premios de este concurso, no acumulan puntos del
				programa de lealtad de Marriott Bonvoy ni Wyndham Rewards. Tampoco aplican los beneficios de
				acuerdo con el status del programa de lealtad.
			</li>
			<li>
				El premio incluye una estad&iacute;a en habitaci&oacute;n standard en ocupaci&oacute;n doble
				de 3 noches de hotel en un establecimiento participante de entre 3 y 4 estrellas dentro del
				territorio de la Rep&uacute;blica de Panam&aacute;. Copa Airlines tendr&aacute; el derecho
				de asignar cualquiera de los hoteles participantes seg&uacute;n disponibilidad. El premio no
				es transferible ni canjeable por efectivo u otros productos.
			</li>
			<li>
				La estad&iacute;a en los hoteles incluye desayuno diario en restaurante, acceso a internet
				en habitaci&oacute;n y &aacute;reas p&uacute;blicas, uso del gimnasio y spa (en el uso del
				Spa se pueden aplicar cargos extra) en los horarios indicados.
			</li>
			<li>
				Copa Airlines tendr&aacute; el derecho de modificar, cancelar o interrumpir el premio de la
				estad&iacute;a de hotel en cualquier momento y por cualquier raz&oacute;n. En caso de que el
				premio sea modificado o cancelado, Copa Airlines no asume ninguna responsabilidad ante los
				participantes o el ganador.
			</li>
			<li>
				Cualquier da&ntilde;o causado por el ganador o sus acompa&ntilde;antes a las instalaciones
				del hotel asignado u a otros hu&eacute;spedes ser&aacute; responsabilidad exclusiva del
				ganador. Copa Airlines no asumir&aacute; ning&uacute;n costo ni responsabilidad por dichos
				da&ntilde;os.
			</li>
			<li>
				El ganador y su acompa&ntilde;ante aceptan y reconocen que cada hotel tiene sus propios
				t&eacute;rminos, condiciones y reglas que rigen la estad&iacute;a y el uso de sus
				instalaciones. Algunos de estos t&eacute;rminos se incluyen en el presente documento, pero
				no se limitan a ellos. El ganador y cualquier acompa&ntilde;ante aceptan que Copa Airlines
				no es responsable de las reglas y condiciones de cada hotel y que es su responsabilidad
				revisar y cumplir con las mismas.
			</li>
			<li>
				Cualquier gasto incurrido por el ganador y su acompa&ntilde;ante dentro de las instalaciones
				del hotel ser&aacute; exclusiva responsabilidad de El ganador y su acompa&ntilde;ante.
			</li>
			<li>
				Copa Airlines tendr&aacute; el derecho de asignar aleatoriamente uno de los hoteles
				participantes para la estad&iacute;a. El ganador y cualquier acompa&ntilde;ante aceptan esta
				asignaci&oacute;n y comprenden que no podr&aacute;n solicitar cambios de hotel.
			</li>
		</ol>
		<p><strong>T&eacute;rminos y Condiciones Grupo Verde Azul</strong></p>
		<p><strong><u>Pol&iacute;ticas y condiciones </u></strong></p>
		<ol>
			<li>
				Estad&iacute;a para 2 (dos) personas con desayuno diario en restaurante, acceso a internet
				en &aacute;reas p&uacute;blicas y habitaci&oacute;n, acceso a &aacute;reas comunes (piscina
				y gimnasio). Ni&ntilde;os hasta 11 a&ntilde;os tienen el desayuno incluido en la tarifa.
			</li>
			<li>
				El premio de este concurso podr&aacute; ser utilizado del 25 de octubre de 2023 a 31 de
				diciembre de 2024. Las reservas estar&aacute;n sujetas a disponibilidad.
			</li>
			<li>
				Ocupaci&oacute;n m&aacute;xima en habitaci&oacute;n para 2 (dos) adultos y 2 (dos)
				ni&ntilde;os hasta 11 (once) a&ntilde;os, en camas existentes. Ni&ntilde;os hasta 11 (once)
				a&ntilde;os gratis en habitaci&oacute;n acompa&ntilde;ados de un adulto.
			</li>
			<li>Cancelaci&oacute;n hasta las 6:00 p.m. 3 (tres) d&iacute;as antes de la llegada.</li>
			<li>En caso de no show, se perder&aacute; la estad&iacute;a</li>
			<li>
				Se permitir&aacute; un cambio de fecha de la reserva original, siempre y cuando haya
				disponibilidad de habitaciones.
			</li>
			<li>
				Cambios adicionales, se cobrar&aacute; un monto de USD75.00 m&aacute;s impuestos hoteleros
				(10%) por cambio (no deducible de gastos en el hotel o reembolsable)
			</li>
			<li>
				Persona adicional tiene un costo de USD20.00 por noche m&aacute;s impuestos hoteleros (10%)
				y aplica para los siguientes hoteles:Marriott Panam&aacute;, Bristol Panam&aacute;, Villa
				Marina, The Santa Maria a Luxury Collection Hotel &amp; Golf Resort, The Buenaventura Golf
				&amp; Beach Resort &ndash; Autograph Collection. La persona adicional tiene un costo de
				USD75 por noche m&aacute;s impuestos hoteleros (10%) por noche. Enti&eacute;ndese como
				personal adicional cualquier persona de 12 (doce) a&ntilde;os en adelante que se hospede con
				2 (dos) adultos mayores de 18 (dieciocho) a&ntilde;os.Pol&iacute;tica de mascotas: Marriott
				Panama hasta 2 (dos) mascotas por habitaci&oacute;n (perros o gatos) con un costo adicional
				de USD75.00 m&aacute;s ITBMS (7%) por estad&iacute;a por habitaci&oacute;n mascota. The
				Buenaventura Golf &amp; Beach Resort Panama &ndash; Autograph Collection una mascota de
				hasta 20 (veinte) libras o 9 (nueve) kilos por habitaci&oacute;n con un costo de USD100
				m&aacute;s impuesto hotelero (10%) por estad&iacute;a por habitaci&oacute;n. Villa Marina
				hasta 2 (dos) mascotas por habitaci&oacute;n con un costo adicional de USD35 m&aacute;s
				impuestos hoteleros (10%) por estad&iacute;a por mascota por habitaci&oacute;n.
			</li>
			<li>
				Ser&aacute; solicitado m&eacute;todo de garant&iacute;a (tarjeta de cr&eacute;dito valida o
				efectivo &ndash; monto varia por hotel) al momento del check in para cubrir gastos extras.
				En caso de que una garant&iacute;a no sea presentada, cualquier gasto realizado dentro del
				hotel deber&aacute; ser pagado al momento de presentar la cuenta
			</li>
			<li>Horario del check in inicia a las 3:00 p.m. y check out a las 12:00 m.d.</li>
			<li>
				Solicitudes especiales como cuna, cama extra, habitaciones connecting o adjoining u otras
				solicitudes deben ser informadas previa a la llegada y estar&aacute;n sujetas a
				disponibilidad.
			</li>
			<li>
				Estad&iacute;as no podr&aacute;n ser utilizadas durante temporada alta. El per&iacute;odo de
				temporada alta contempla las siguientes fechas: Carnavales en Panam&aacute;, Semana Santa,
				del 15 de junio al 31 de agosto, Fiestas Patrias en Panam&aacute;, Acci&oacute;n de Gracias
				en Estados Unidos, Navidad y A&ntilde;o Nuevo.
			</li>
		</ol>
		<p><strong><u>Pol&iacute;tica y condiciones - Marriot Panama</u></strong></p>
		<ol>
			<li>
				Fechas que no aplica reservas: 18 al 27 de octubre de 2023, 6 al 8 de noviembre de 2023, 13
				al 17 de noviembre de 2023.
			</li>
			<li>
				Fechas adicionales de blackout podr&aacute;n ser aplicadas. Consultar directamente a la
				propiedad
			</li>
			<li>
				Solicitudes especiales y cambios deben ser enviados al e-mail <a
					href="mailto:reservations@marriottpanamahotel.com">reservations@marriottpanamahotel.com</a
				>, con la informaci&oacute;n de la reserva.
			</li>
		</ol>
		<p>&nbsp;</p>
		<p><strong><u>Pol&iacute;tica y condiciones - Villa Marina Lodge &amp; Condos</u></strong></p>
		<ol>
			<li>
				Fechas que no aplica reservas: 1 al 30 de noviembre 2023, 8 al 10 de diciembre de 2023, 22
				al 31 de diciembre de 2023, 1 al 6 de enero de 2024, 9 al 13 de enero de 2024, 9 al 13 de
				febrero de 2024, 28 al 30 de marzo de 2024. Vacaciones escolares de Panam&aacute; 2024.
			</li>
			<li>
				Fechas adicionales de blackout podr&aacute;n ser aplicadas. Consultar directamente a la
				propiedad
			</li>
			<li>
				Solicitudes especiales y cambios deben ser enviados al e-mail <a
					href="mailto:reservations@villamarina.com.pa">reservations@villamarina.com.pa</a
				>, con la informaci&oacute;n de la reserva.
			</li>
		</ol>
		<p>
			<strong
				><u
					>Pol&iacute;ticas y condiciones - The Santa Maria a Luxury Collection Hotel &amp; Golf
					Resort:</u
				></strong
			>
		</p>
		<ol>
			<li>
				Fechas que no aplica reservas: 2 al 5 de octubre de 2023, 22 al 31 de diciembre de 2023, 1 y
				2 de enero de 2024, 15 al 21 enero de 2024, 28 y 29 de febrero de 2024, 13 al 15 de marzo de
				2024.
			</li>
			<li>
				Fechas adicionales de blackout podr&aacute;n ser aplicadas. Consultar directamente a la
				propiedad
			</li>
			<li>
				Solicitudes especiales y cambios deben ser enviados al e-mail <a
					href="mailto:reservations@thesantamariahotel.com">reservations@thesantamariahotel.com</a
				>, con la informaci&oacute;n de la reserva.
			</li>
		</ol>
		<p>
			<strong><u>Pol&iacute;ticas y condiciones - Bristol Panama a Registry Collection:</u></strong>
		</p>
		<ol>
			<li>
				Fechas que no aplica reservas: 17 al 25 de noviembre de 2023, 29 y 30 de diciembre de 2023.
			</li>
			<li>
				Fechas adicionales de blackout podr&aacute;n ser aplicadas. Consultar directamente a la
				propiedad
			</li>
			<li>
				Solicitudes especiales y cambios deben ser enviados al e-mail <a
					href="mailto:reservations@bristolpanama.com">reservations@bristolpanama.com</a
				>, con la informaci&oacute;n de la reserva.
			</li>
		</ol>
		<p>
			<strong
				><u
					>Pol&iacute;ticas y condiciones - The Buenaventura Golf &amp; Beach Resort - Autograph
					Collection:</u
				></strong
			>
		</p>
		<ol>
			<li>
				Fechas que no aplican reservas: 3 al 5 de noviembre de 2023, 10 y 11 de noviembre de 2023, 8
				y 9 de diciembre de 2023, 23 al 31 de diciembre de 2023, 1 al 3 de enero de 2024, 5 y 6 de
				febrero de 2024, 10 al 17 de febrero de 2024, 1 al 31 de marzo de 2024, 18 al 20 de abril de
				2024; 22 al 29 de abril de 2024.
			</li>
			<li>
				Fechas adicionales de blackout podr&aacute;n ser aplicadas. Consultar directamente a la
				propiedad
			</li>
			<li>
				Solicitudes especiales y cambios deben ser enviados al e-mail <a
					href="mailto:reservations@buenaventuraresort.com">reservations@buenaventuraresort.com</a
				>, con la informaci&oacute;n de la reserva.
			</li>
		</ol>
		<p><strong>T&eacute;rminos y Condiciones Hoteles Grupo Bern</strong></p>
		<ol>
			<li>
				Estad&iacute;a para 2 personas con desayuno incluido&nbsp;diario, acceso a internet en
				&aacute;reas p&uacute;blicas y habitaci&oacute;n, acceso a &aacute;reas comunes (piscina y
				gimnasio). Ocupaci&oacute;n m&aacute;xima en habitaci&oacute;n para 2&nbsp;adultos.
			</li>
			<li>
				Cancelaci&oacute;n: Se podr&aacute; hacer la cancelaci&oacute;n, pero solo tendr&aacute; 4
				meses m&aacute;s para darle uso.&nbsp;
			</li>
			<li>
				En caso de no show, especificar pol&iacute;tica de no show: En caso de no show el
				hu&eacute;sped cuando quiera volver a utilizarlo, solo podr&aacute; hacerlo 1 noche la otra
				la habr&aacute; perdido.
			</li>
			<li>
				Se permitir&aacute;&nbsp;tres cambios&nbsp;de fecha para la reserva, siempre y cuando haya
				disponibilidad de habitaciones. Cambios adicionales, se cobrar&aacute; un monto de $25 por
				cambio. Persona adicional tiene un costo de en hoteles de ciudad un costo de: $20 y en
				Resorts como Gamboa y Westin Playa Bonita $95
			</li>
		</ol>
		<ol start="5">
			<li>No se aceptan mascotas</li>
			<li>
				Ser&aacute; solicitado m&eacute;todo de garant&iacute;a (tarjeta de cr&eacute;dito valida o
				efectivo &ndash; monto varia por hotel) al momento del check in para cubrir gastos extras.
				En caso de que una garant&iacute;a no sea presentada, cualquier gasto realizado dentro del
				hotel deber&aacute; ser pagado al momento de presentar la cuenta
			</li>
			<li>Horario del check in inicia a las 3:00 p.m. y check out a las 12:00 m.d.</li>
			<li>
				Las estad&iacute;as en este hotel no podr&aacute;n ser utilizadas en: Fiesta Patrias de
				Panam&aacute; (nov. 1 - 7, Nov 10 y Nov 28 2023), Navidad y A&ntilde;o Nuevo (Diciembre 22
				&ndash; Enero 2, 2024), Carnavales en Panam&aacute; (Febrero 9 - 13, 2024) y Semana Santa
				(Marzo 27 - 31, 2024)
			</li>
			<li>Otras restricciones pueden aplicar.</li>
			<li>Sujeto a disponibilidad</li>
		</ol>
		<p>
			Compa&ntilde;&iacute;a Paname&ntilde;a de Aviaci&oacute;n, S.A. (Copa Airlines) tendr&aacute;
			derecho de cancelar este concurso en cualquier momento y por cualquier raz&oacute;n.
			Tambi&eacute;n tendr&aacute; el derecho de modificar las fechas o t&eacute;rminos de concurso
			en cualquier momento<strong>, </strong>en cuyo caso lo informar&aacute; debidamente a los
			participantes.
		</p>
		<p>Terms and Conditions: " <strong>PANAMA FINAL DESTINATION CONTEST</strong>".</p>
		<p>
			PANAMA FINAL DESTINATION CONTEST! (hereinafter "<strong>THE CONTEST</strong>&rdquo;). On our
			Instagram account you can become one of the winners of (2) Roundtrip tickets to Panama, one
			for the winner and one for his/her companion, through Copa Airlines and 3 hotel nights for
			two.
		</p>
		<ol>
			<li><strong>THE CONTEST DYNAMICS</strong></li>
			<li>
				For a period of 15 days you will have the opportunity to answer trivia to accumulate as many
				points as possible in the shortest time possible. You will only be able to participate once,
				so make sure you get it right.
			</li>
			<li>
				The trivia will be published in the link www.destinopanamacopa.com randomly, for two weeks
				starting the week of September 18, 2023.
			</li>
			<li>10 winners will be chosen</li>
			<li>
				Each winner will receive two (2) round trip tickets, one for the winner and one for his/her
				companion with final destination Panama, through Copa Airlines to travel from any of the
				destinations where Copa Airlines operates and a 3-night double room stay in a 3 star or 4
				star hotel in the Republic of Panama (hereinafter "THE PRIZE").
			</li>
		</ol>
		<ol>
			<li><strong>HOW TO PARTICIPATE?</strong></li>
			<li>Follow us on our official Instagram account @CopaAirlines.</li>
			<li>
				Like the official contest post (hereinafter "OFFICIAL POST") published on our official
				Instagram account @CopaAirlines.
			</li>
			<li>
				Visit the link (link) www.destinopanamacopa.com that you will find available in the
				Biography of our official account @CopaAirlines in Instagram, our stories and/or in OFFICIAL
				POST that will take you to the official page of the contest where you will find questions
				about Panama.
			</li>
			<li>
				The 10 people who answer correctly the most questions in the least amount of time will be
				the winners.
			</li>
		</ol>
		<ol>
			<li><strong>TERMS AND CONDITIONS</strong></li>
		</ol>
		<p><strong>NO PURCHASE OR PAYMENT OF ANY KIND IS NECESSARY TO ENTER THIS CONTEST.</strong></p>
		<ol>
			<li>
				When participating, you accept and acknowledge the terms and conditions of<strong>
					THE CONTEST.</strong
				>
			</li>
			<li>
				This contest is organized by Compa&ntilde;&iacute;a Paname&ntilde;a de Aviaci&oacute;n, S.A.
				(Copa Airlines), whose headquarters are located at Costa del Este Urbanization, Business
				Park Complex, North Tower, Panama City, Republic of Panama.
			</li>
			<li>
				The Contest is open to individuals who are eighteen (18) years of age or older at the time
				of entry. Copa Airlines has the right to verify each participant's eligibility.
			</li>
			<li>
				The Contest does not apply to the following countries: United States, Brasil, Bolivia and
				Panam&aacute;.
			</li>
			<li>
				Chile: &ldquo;Competition rules formalized on September 14, 2023 in the Santiago Notary
				Office of Mr. Juan Ricardo San Mart&iacute;n Urrejola.&rdquo;
			</li>
			<li>The participant must be a follower of the Instagram account @CopaAirlines</li>
			<li>Only one entry (participation) per user will be accepted.</li>
			<li>
				Any user who does not follow all the steps and comply with all the requirements required by
				Copa Airlines will be automatically eliminated from the contest.
			</li>
			<li>
				Any profile that has more than ten thousand followers (10,000), pet accounts, any account
				used for commercial purposes or business purposes, in the name of a legal entity, or that is
				detected as false or committing fraudulent acts will be removed from the contest.
			</li>
			<li>
				Ten (10) winners will be chosen, this will be the ten (10) people who answer the most
				questions correctly, in the least amount of time and comply with the requirements
				established in this terms and conditions will be the winners. Winners will be announced
				through our official Instagram account <a href="https://www.instagram.com/CopaAirlines/"
					>@CopaAirlines</a
				>
				and any other official network that Copa Airlines considers.
			</li>
			<li>
				Winners will be announced no later than seven (7) calendar days after the end of the
				contest.
			</li>
			<li>
				This contest does not apply to employees of Copa Airlines, Aerorep&uacute;blica, S.A., Copa
				Airlines Colombia and La Nueva Aerol&iacute;nea, S.A., and branches, suppliers of these
				companies, or employees of advertising agencies, employees of Grupo Verde Azul Hotel and
				Grupo Bern influencers or content creators who maintain commercial agreements with them.
			</li>
			<li>
				Any damage or loss (direct, indirect or consequential) to the winner and/or his/her
				companion or property due to the winner's or his/ her companion fault or negligence or any
				cause not attributable to Copa Airlines, in connection with his/her participation in the
				contest or the acceptance, use and enjoyment of the prizes, is the sole responsibility of
				the winner and/or his/her companion or any person joining the winner.
			</li>
			<li>
				Any attempt to violate any of the contest rules, or to give false information with intent to
				defraud, will be prosecuted to the fullest extent of the law. By participating in this
				contest, participants agree and accept the strict application of these rules in all terms.
				Any participation that is altered, forged or otherwise manipulated to claim to be the winner
				will be void. Participants are solely responsible for any present or future situation
				arising out of their own fault or negligence or for any cause not attributable to Copa
				Airlines, in connection with their participation in this contest or arising out of their
				acceptance of the prizes or use of the prizes comprising the contest.
			</li>
			<li>
				The winner and his/her companion grants Copa Airlines and its advertising and public
				relations agencies the right to publish or announce his/her name and to use photographs or
				video recordings that include his/her image and/or voice, in any advertising media without
				any compensation, inside or outside the Panamanian territory, in any existing or future
				advertising or communication media, for an indefinite period of time.
			</li>
			<li>
				As a requirement of prize acceptance, the winner and his/her companion will execute a letter
				of acceptance of the prize, a liability release and any other document required by Copa
				Airlines, regarding the terms and conditions in connection with the acceptance and use of
				the prizes to be provided by Copa Airlines.
			</li>
			<li>
				Any individual making changes to the contest operations process or violating laws and does
				not comply with the conditions set forth in these rules will be disqualified.
			</li>
			<li>
				Compa&ntilde;&iacute;a Paname&ntilde;a de Aviaci&oacute;n S.A. (Copa Airlines) has the right
				to disqualify and/or demand the return of the benefits granted to those participants who, in
				Copa Airlines assessment, directly or indirectly fail to comply with the rules and
				conditions established herein.
			</li>
			<li>
				Information collected from participants is subject to the Copa Airlines Privacy Policy,
				which is found at <a href="https://www.copaair.com/es/web/pa/politica-privacidad"
					>https://www.copaair.com/es/web/pa/politica-privacidad</a
				>
			</li>
			<li>
				By accepting these terms and conditions, you expressly authorize Copa Airlines to collect
				all information necessary for the purpose of participating in the contest. The information
				you provide will be used only in connection with this contest, other promotional or other
				activities of Copa Airlines and Fondo de Promoci&oacute;n Tur&iacute;stica de Panam&aacute;
				(PROMTUR). Likewise, COPA AIRLINES is committed to make every effort to protect the personal
				data of participants in accordance with applicable data protection laws. All participants,
				by the mere fact of participating in this promotion, expressly authorize COPA AIRLINES to
				transfer to its affiliated companies and authorized representatives the information, data
				and documents provided by the participants.
			</li>
			<li>
				Given the inherent characteristics of the Internet environment, Copa Airlines will not be
				responsible for incomplete or failed computer transmissions or technical failures of any
				kind, including electronic malfunctions of any network, hardware or software, Internet
				availability and access, hacker access attempts, any incorrect or incomplete contest
				information, and any human, technical or other failures that may occur during the processing
				of entries, and therefore, any liability arising from such events or acts.
			</li>
			<li>
				Winners of this contest grant a perpetual, irrevocable, worldwide, non-exclusive license to
				Copa Airlines, and its authorized representatives, to reproduce, distribute and create
				derivative works from the participations or content published in connection with the contest
				and the promotion of the contest in any media now known or hereafter developed. This license
				is granted free of charge.
			</li>
			<li>
				Each participant waives all claims against Copa Airlines, Instagram, Facebook and each of
				their respective parents, affiliated companies, subsidiaries, officers, directors,
				employees, agents, licensees, distributors, dealers, retailers, publishers, representatives,
				and advertising and promotion agencies, and all other companies associated with this
				contest, and all of their respective officers, directors, employees, agents and
				representatives for any injury, damage or loss that may occur, directly or indirectly, in
				whole or in part, from participation in the contest or from the receipt or use of any prize
				(or any part thereof) or any travel or activity in connection with the receipt or use of any
				prize (or any part thereof).
			</li>
			<li>
				By participating in this contest, each participant agrees to fully exonerate and release
				Copa Airlines from all legal, administrative, commercial/civil or any other liability and
				agrees not to bring any claim and/or legal action against Copa Airlines in any court of law,
				administrative or judicial, or any other jurisdiction, as a result of acceptance of the
				prize and participation in the activities related to the prize.
			</li>
			<li>
				The terms and conditions of this contest are governed by the law of the Republic of Panama,
				and the Courts of the Republic of Panama shall have jurisdiction over all matters arising
				from the interpretation and/or fulfillment and/or development of this contest.
			</li>
			<li>
				The following are considered valid addresses for all purposes of this contest: the address
				of Compa&ntilde;&iacute;a Paname&ntilde;a de Aviaci&oacute;n, S.A. (Copa Airlines) located
				at Costa del Este Urbanization, Business Park Complex, North Tower, Panama City, Republic of
				Panama, and the addresses of the winners or alternates, as well as their companions, as
				stated by them in the Release of Liability/Publication Authorization/Consent of Personal
				Data Information.
			</li>
			<li>
				Instagram has no responsibilities in this contest and the data acquired will be managed by
				our company.
			</li>
			<li>
				Copa Airlines assumes no responsibility for the services provided by participating hotels.
				Any problem, concern, claim or incident arising during the hotel stay is the sole
				responsibility of the hotel indicated on the prize letter. Winner and any accompanying
				person understand and agree that Copa Airlines has no control over the actions, policies,
				services or conditions of the hotel.
			</li>
		</ol>
		<ol>
			<li><strong>NOTIFICATION OF WINNERS:</strong></li>
			<li>
				The winner will be notified via the e-mail address provided at the time of his/her
				participation in <strong>THE CONTEST</strong>, or other channels that Copa Airlines decides
				to implement.
			</li>
			<li>
				The e-mail notification to the winner will include a letter of release of liability, a
				letter of acceptance of prize and any other letter that Copa Airlines may require,
				indicating that the winner has been awarded <strong>THE PRIZE</strong>, such letters must be
				signed on each page by the winner and his/her companion.
			</li>
			<li>
				The winner must send the letter of release of liability, the letter of acceptance of prize,
				the valid passports of him/her and his/her companion, a proof of residence in the country
				(electricity, gas, water, telephone bill) and any other document required by Copa Airlines,
				to <a href="mailto:promociones@copaair.com">promociones@copaair.com</a>
				or any other means requested by Copa Airlines, within twenty-four (24) hours after being notified
				as winner of <strong>THE CONTEST</strong>, in order to accept
				<strong>THE PRIZE</strong>.
			</li>
			<li>
				If any of the winners does not respond to the e-mail and/or does not send the information
				required by Copa Airlines within the period indicated, he/she will forfeit <strong
					>THE PRIZE</strong
				> and the next runner-up will be considered the new winner, without this being a default by Copa
				Airlines.
			</li>
			<li>
				Any response after 24 hours will be considered void and the participant will not be entitled
				to any present or future claims against Copa Airlines.
			</li>
			<li><strong>THE PRIZE</strong></li>
			<li>
				Two (2) Round Trip Tickets, one for the winner and one for his/her companion, through Copa
				Airlines to travel to Panama City, Republic of Panama, from any of the destinations where
				Copa Airlines operates.
			</li>
			<li>
				One (1) 3-night double room stay in a 3-star or 4-star hotel in the Republic of Panama
				(restrictions and terms and conditions of each hotel will apply).
			</li>
		</ol>
		<ol>
			<li><strong>PRIZE RESTRICTIONS </strong></li>
		</ol>
		<p><strong>Airline Ticket Restrictions:</strong></p>
		<ol>
			<li>
				The tickets will be valid from October 25<sup>th</sup>, 2023 to December 31<sup>st</sup>,
				2024, period within which the issuance and travel (round trip) of the totality of the
				granted tickets must be carried out.
			</li>
			<li>
				The winner and his/her travel companion must begin and end the trip on the same dates; they
				must travel together at all times.
			</li>
			<li>
				Once the tickets have been issued, it will not be possible to change the name on the
				tickets.
			</li>
			<li>Tickets are valid for travel on COPA AIRLINES in Economy Class.</li>
			<li>
				Once the reservation has been issued, you must go to one of our customer service centers
				within 48 hours to pay the taxes and issue the reservation tickets.
			</li>
			<li>
				Tickets cannot be used during high season. The high season period includes the following
				dates: Carnivals in Panama, Easter, June 15 to August 31, Panamanian National Holidays,
				Thanksgiving in the United States, Christmas and New Year's Day.
			</li>
			<li>
				Copa Airlines is not responsible for the payment of government and/or airport taxes of the
				cities of origin and destination related to the airline tickets. Such taxes must be paid in
				cash at the time tickets are issued.
			</li>
			<li>
				Tickets are not transferable, refundable in cash or transferable to other airlines. They
				cannot be sold, exchanged or extended after the expiration date, nor are rerouting allowed.
			</li>
			<li>
				Only one change of date will be allowed, such change will be subject to availability and the
				same conditions set forth herein shall apply. The validity date of the ticket may not be
				extended, in other words, the requested change must be made within the validity period
				indicated in numeral 1 of this section.
			</li>
			<li>
				It is necessary to request tickets at least thirty (30) days prior to the date of travel.
				COPA AIRLINES does not guarantee flight availability.
			</li>
			<li>
				This Agreement does not contemplate baggage exemption or discount on overweight. The baggage
				allowance, that is, limit, weight and dimensions of the baggage, will be those in effect at
				the time of ticket redemption for the corresponding fare class, it will be the
				responsibility of each winner to validate the current allowance.
			</li>
			<li>
				Due to availability reasons, COPA AIRLINES cannot guarantee that your baggage will be sent
				on your assigned flight and may arrive at times different from your arrival time.
			</li>
			<li>
				COPA AIRLINES is not responsible for the documentation, papers or identifications that each
				passenger needs in order to travel.
			</li>
			<li>
				Expenses incurred by the winner and his/her companion during the trip to Panama City will
				not be the responsibility of Copa Airlines.
			</li>
			<li>
				Notwithstanding the foregoing, in the event that in the future COPA AIRLINES does not
				continue to operate its services to the origin from which the winner will travel, the winner
				and his/her companion will not be entitled to any type of compensation, and in such
				circumstances must fly from a different destination where COPA AIRLINES has operations.
			</li>
			<li>
				The airline tickets that are part of the Prizes of this contest do not accrue miles of the
				Copa Airlines frequent flyer program, ConnectMiles, or of the member airlines of the Star
				Alliance network. They are also not valid for status changes or upgrades in these loyalty
				programs.
			</li>
			<li>
				Passengers traveling are responsible for complying with applicable laws and health
				requirements of each destination visited.
			</li>
			<li>
				Flights subject to restrictions, government approvals and changes. Some countries maintain
				entry restrictions. It is the responsibility of the winner and his/her companion to verify
				immigration, biosecurity and health requirements to enter any of our destinations (Copa
				Airlines).
			</li>
			<li>
				Any injury, loss or damage (direct, indirect or consequential) caused to THE WINNER,
				companion or their property due to their fault or negligence or any cause not attributable
				to Copa Airlines, in connection with the acceptance, use and enjoyment of the tickets is the
				sole responsibility of THE WINNER. Even if the injury, loss or damage arises from force
				majeure.
			</li>
			<li>
				It is the sole responsibility of the winner and his/her companion to have all the necessary
				documentation to be able to travel, including, but not limited to passports, visas and any
				other required documents, according to the applicable laws, and it is an indispensable
				requirement to participate in this contest to have a valid passport. Likewise, it is the
				sole responsibility of the winner and his/her companion to verify that their documentation
				complies with all the necessary requirements to be able to use it effectively at the time of
				travel, since, if these requirements are not met, the winners will be disqualified, without
				the right to any present or future claim of any kind.
			</li>
			<li>
				In the event that the companion is a minor and is not traveling with a parent, the parents
				with parental authority or legal guardian must provide proof of identification and
				relationship with the minor and also have complied with the exit permit for the minor as
				required by the Immigration Authority in accordance with the legislation of each country of
				residence; or in its absence, the authorization of the minor's trip in writing. The
				consequences derived from the non-fulfillment of the requirements established in this point,
				will be the direct responsibility of the winners.
			</li>
			<li>
				If the place of residence of the winner and his/her companion is not a city where Copa
				Airlines operates, the winner and his/her companion must travel by their own means to a city
				where Copa Airlines operates and then travel by their own means to their place of residence.
			</li>
			<li>
				Copa Airlines is not responsible in the event that the winner or companion is unable to
				travel on the permitted dates.
			</li>
			<li>
				In case of "No Show" (passenger does not arrive at takeoff time or in time to board) Copa
				Airlines is not responsible and the winner and his/her companion will not have the right to
				request a new travel date.
			</li>
			<li>
				Any delay, flight cancellation, rerouting or operational change due to reasons based on the
				protection of human life, security or adverse weather conditions, or other acts of God or
				force majeure, will not be considered a breach of the contract of carriage or the terms and
				conditions of this contest, nor will it imply any liability of any kind for Copa Airlines.
				In addition, the winner acknowledges and accepts this provision prior to actual acceptance
				of the awarded tickets.
			</li>
		</ol>
		<p><strong>Restrictions on stays at participating hotels:</strong></p>
		<ol>
			<li>
				By accepting the hotel stay prize, the winner and any companion release COPA AIRLINES,
				affiliates, employees and agents from any liability in connection with the hotel stay
				indicated including, but not limited to, personal injury, property damage, losses, expenses,
				claims or demands of any kind that may arise as a result of the stay.
			</li>
			<li>
				Stays that are part of the Prizes in this contest do not accrue Marriott Bonvoy or Wyndham
				Rewards loyalty program points. Nor do benefits apply based on loyalty program status.
			</li>
			<li>
				The prize includes a 3-night double occupancy standard room stay at a participating 3 to 4
				star hotel within the territory of the Republic of Panama. Copa Airlines reserves the right
				to assign any of the participating hotels based on availability. The prize is not
				transferable or redeemable for cash or other products.
			</li>
			<li>
				The hotel stay includes daily breakfast in the restaurant, internet access in the room and
				public areas, use of the gym and spa at the indicated times.
			</li>
			<li>
				Copa Airlines reserves the right to modify, cancel or discontinue the hotel stay prize at
				any time and for any reason. In the event the prize is modified or canceled, Copa Airlines
				assumes no liability to participants or winner.
			</li>
			<li>
				Any damage caused by the winner or his/her companions to the assigned hotel facilities or to
				other guests will be the sole responsibility of the winner. Copa Airlines will not assume
				any cost or liability for such damages.
			</li>
			<li>
				The winner and his/her companion agree and acknowledge that each hotel has its own terms,
				conditions and rules governing the stay and use of its facilities. Some of these terms are
				included herein, but not limited to. The winner and any accompanying person agree that Copa
				Airlines is not responsible for the rules and conditions of each hotel and that it is their
				responsibility to review and comply with them.
			</li>
			<li>
				Any expenses incurred by the winner and his/her companion within the hotel facilities will
				be the sole responsibility of the winner and his/her companion.
			</li>
			<li>
				Copa Airlines reserves the right to randomly assign one of the participating hotels for the
				stay. Winner and any accompanying person accept this assignment and understand that they may
				not request hotel changes.
			</li>
		</ol>
		<p><strong>Terms and Conditions Grupo Verde Azul</strong></p>
		<p><strong><u>Policies and Conditions </u></strong></p>
		<ol>
			<li>
				Stay for 2 (two) people with daily breakfast in restaurant, internet access in public areas
				and room, access to common areas (pool and gym). Children up to 11 years old have breakfast
				included in the rate.
			</li>
			<li>
				The prize of this contest may be used from October 1, 2023 to October 31, 2024. Reservations
				are subject to availability.
			</li>
			<li>
				Maximum occupancy in room for 2 (two) adults and 2 (two) children up to 11 (eleven) years
				old, in existing beds. Children up to 11 (eleven) years old free in room accompanied by an
				adult.
			</li>
			<li>Cancellation until 6:00 p.m. 3 (three) days prior to arrival.</li>
			<li>In case of no show, the stay will be forfeited.</li>
			<li>
				A change of date of the original reservation will be allowed, subject to room availability.
			</li>
			<li>
				Additional changes will be charged a fee of USD75.00 plus hotel taxes (10%) per change (not
				deductible from hotel expenses or refundable).
			</li>
			<li>
				Additional person has a cost of USD20.00 per night plus hotel taxes (10%) and applies for
				the following hotels: Marriott Panama, Bristol Panama, Villa Marina, The Santa Maria a
				Luxury Collection Hotel &amp; Golf Resort, The Buenaventura Golf &amp; Beach Resort -
				Autograph Collection has a cost of USD75.00 per night plus hotel taxes (10%). An additional
				person is any person 12 (twelve) years old and older staying with 2 (two) adults over 18
				(eighteen) years old. Pet Policy: Marriott Panama up to 2 (two) pets per room (dogs or cats)
				with an additional cost of USD75.00 plus ITBMS (7%) per stay per pet. The Buenaventura Golf
				&amp; Beach Resort Panama - Autograph Collection one pet up to 20 (twenty) pounds or 9
				(nine) kilos per room at a cost of USD100.00 plus hotel tax (10%) per stay. Villa Marina up
				to 2 (two) pets per room with an additional cost of USD35 plus hotel taxes (10%) per stay.
			</li>
			<li>
				A method of guarantee (valid credit card or cash - amount varies per hotel) will be
				requested at check in to cover extra expenses. In the event that a guarantee is not
				presented, any expenses incurred within the hotel must be paid at check-in.
			</li>
			<li>Check in time starts at 3:00 p.m. and check out time is 12:00 noon.</li>
			<li>
				Special requests such as crib, extra bed, connecting or adjoining rooms or other requests
				must be informed prior to arrival and will be subject to availability.
			</li>
			<li>
				Stays cannot be used during high season. The high season period includes the following
				dates: Carnival in Panama, Easter, June 15 to August 31, National Holidays in Panama,
				Thanksgiving in the United States, Christmas and New Year's Day.
			</li>
		</ol>
		<p><strong><u>Policy and Conditions- Marriot Panama</u></strong></p>
		<ol>
			<li>Blackout dates: October 18 - 27, 2023, November 6 - 8, 2023, November 13 - 17, 2023.</li>
			<li>Additional blackout dates may apply. Please inquire directly with the property.</li>
			<li>
				Special requests and changes should be sent to the e-mail <a
					href="mailto:reservations@marriottpanamahotel.com">reservations@marriottpanamahotel.com</a
				>, with the reservation information.
			</li>
		</ol>
		<p>&nbsp;</p>
		<p><strong><u>Policy and Conditions - Villa Marina Lodge &amp; Condos</u></strong></p>
		<ol>
			<li>
				Blackout dates: November 1 to 30, 2023, December 8 to 10, 2023, December 22 to 31, 2023,
				January 1 to 6, 2024, January 9 to 13, 2024, February 9 to 13, 2024, March 28 to 30, 2024.
				Panama School Vacation 2024.
			</li>
			<li>Additional blackout dates may apply. Please inquire directly with the property.</li>
			<li>
				Special requests and changes should be sent to the e-mail <a
					href="mailto:reservations@villamarina.com.pa">reservations@villamarina.com.pa</a
				>, with the reservation information.
			</li>
		</ol>
		<p>
			<strong
				><u>Policy and Conditions - The Santa Maria a Luxury Collection Hotel &amp; Golf Resort:</u
				></strong
			>
		</p>
		<ol>
			<li>
				Blackout dates: October 2 to 5, 2023, December 22 to 31, 2023, January 1 and 2, 2024,
				January 15 to 21, 2024, February 28 and 29, 2024, March 13 to 15, 2024.
			</li>
			<li>Additional blackout dates may apply. Please inquire directly with the property.</li>
			<li>
				Special requests and changes should be sent to the e-mail <a
					href="mailto:reservations@bristolpanama.com">reservations@bristolpanama.com</a
				>, with the reservation information.
			</li>
		</ol>
		<p>
			<strong><u>Pol&iacute;ticas y condiciones - Bristol Panama a Registry Collection:</u></strong>
		</p>
		<ol>
			<li>Blackout dates: November 17 to 25, 2023, December 29 and 30, 2023.</li>
			<li>Additional blackout dates may apply. Please inquire directly with the property.</li>
			<li>
				Special requests and changes should be sent to the e-mail <a
					href="mailto:reservations@bristolpanama.com">reservations@bristolpanama.com</a
				>, with the reservation information.
			</li>
		</ol>
		<p>
			<strong
				><u
					>Pol&iacute;ticas y condiciones - The Buenaventura Golf &amp; Beach Resort - Autograph
					Collection:</u
				></strong
			>
		</p>
		<ol>
			<li>
				Blackout dates: November 3 to 5, 2023, November 10 and 11, 2023, December 8 and 9, 2023,
				December 23 to 31, 2023, January 1 to 3, 2024, February 5 and 6, 2024, February 10 to 17,
				2024, March 1 to 31, 2024, April 18 to 20, 2024; April 22 to 29, 2024.
			</li>
			<li>Additional blackout dates may apply. Please inquire directly with the property.</li>
			<li>
				Special requests and changes should be sent to the e-mail <a
					href="mailto:reservations@buenaventuraresort.com">reservations@buenaventuraresort.com</a
				>, with the reservation information.
			</li>
		</ol>
		<p><strong>Terms and Conditions Hoteles Grupo Bern</strong></p>
		<ol>
			<li>
				Stay for 2 people with breakfast included daily, internet access in public areas and room,
				access to common areas (pool and gym). Maximum occupancy in room for 2 adults.
			</li>
			<li>
				Cancellation: Cancellation can be made, but you will only have 4 more months to use it.
			</li>
			<li>
				In case of no show, specify no show policy: In case of no show the guest when he/she wants
				to use it again, he/she will only be able to do it 1 night, the other one will be lost.
			</li>
			<li>
				Three date changes will be allowed for the reservation, subject to room availability.
				Additional changes will be charged $25 per change. Additional person has a cost of: $20 in
				city hotels and $95 in resorts such as Gamboa and Westin Playa Bonita.
			</li>
		</ol>
		<ol start="5">
			<li>Pets are not allowed</li>
			<li>
				A method of guarantee (valid credit card or cash - amount varies per hotel) will be
				requested at check in to cover extra expenses. In the event that a guarantee is not
				presented, any expenses incurred within the hotel must be paid at check-in.
			</li>
			<li>Check in time starts at 3:00 p.m. and check out time is 12:00 noon.</li>
			<li>
				Stays at this hotel cannot be used on: Panama National Holiday (Nov. 1 - 7, Nov 10 and Nov
				28 2023), Christmas and New Year's Day (Dec. 22 - Jan. 2, 2024), Carnivals in Panama (Feb. 9
				- 13, 2024) and Easter Week (March 27 - 31, 2024).
			</li>
			<li>Other restrictions may apply.</li>
			<li>Subject to availability</li>
		</ol>
		<p>
			Compa&ntilde;&iacute;a Paname&ntilde;a de Aviaci&oacute;n, S.A. (Copa Airlines) reserves the
			right to cancel this contest at any time and for any reason. It also reserves the right to
			modify the dates and/or terms of the contest at any time.
		</p>
	</div>
{:else}
	<div class="pt-64 pb-32 text-grey-0 bg-primary">
		<div class="container mx-auto mt-32">
			<h1>
				<p>
					Termos e condi&ccedil;&otilde;es: <strong>"</strong>Competi&ccedil;&atilde;o
					<strong>DESTINO</strong> <strong>FINAL PANAM&Aacute;"</strong>.
				</p>
			</h1>
		</div>
	</div>
	<div class="container mx-auto my-32">
		<p><strong>&nbsp;BRASIL</strong></p>
		<p>
			Em nossa conta do Instagram, voc&ecirc; pode se tornar um dos ganhadores de (2) passagens de
			ida e volta com destino ao <strong>Panam&aacute;</strong>, uma para o ganhador e outra para
			seu acompanhante, pela Copa Airlines e 3 noites de hospedagem em hotel para duas pessoas.
		</p>
		<p>&nbsp;</p>
		<ol>
			<li><strong>DIN&Acirc;MICA DA COMPETI&Ccedil;&Atilde;O</strong></li>
			<li>
				durante um per&iacute;odo de 15 dias, ter&aacute;s a oportunidade de responder a um
				question&aacute;rio para acumular o maior n&uacute;mero de pontos no menor tempo
				poss&iacute;vel. S&oacute; poder&aacute;s participar uma vez, por isso certifique-se de que
				acerta na resposta.
			</li>
			<li>
				As quest&otilde;es ser&atilde;o publicadas no link <a
					href="http://www.destinopanamacopa.com">destinopanamacopa.com</a
				> de forma aleat&oacute;ria, durante duas semanas a partir da semana de 18 de setembro, por um
				per&iacute;odo de 15 dias.
			</li>
			<li>Ser&atilde;o selecionados 10 vencedores.</li>
			<li>
				Cada vencedor receber&aacute; dois (2) bilhetes de ida e volta, um para o vencedor e outro
				para o seu acompanhante, com destino final ao Panam&aacute;, atrav&eacute;s da Copa
				Airlines, para viajar a partir de qualquer um dos destinos onde a Copa Airlines opera e uma
				estadia de 3 noites em quarto duplo em hot&eacute;is de 3 ou 4 estrelas na Rep&uacute;blica
				do Panam&aacute; (doravante "O PR&Ecirc;MIO").
			</li>
		</ol>
		<p><strong>&nbsp;</strong></p>
		<ol>
			<li><strong> COMO PARTICIPAR?</strong></li>
			<li>Seguir-nos na nossa conta oficial do Instagram @CopaAirlinesBR</li>
			<li>
				&ldquo;Curtir&rdquo; a publica&ccedil;&atilde;o oficial do concurso (doravante "POST
				OFICIAL") publicada na nossa conta oficial do Instagram @CopaAirlinesBR.
			</li>
			<li>
				Visitar o link (link) <a href="http://www.destinopanamacopa.com">destinopanamacopa.com</a>
				que dispon&iacute;vel na Capa do Perfil (Bio) de nossa conta oficial @CopaAirlinesBR no Instagram,
				nos nossos <em>stories</em> e/ou no POST OFICIAL que o levar&aacute; &agrave; p&aacute;gina oficial
				do concurso onde encontrar&aacute; o question&aacute;rio sobre o Panam&aacute;.
			</li>
			<li>
				As 10 pessoas que responderem corretamente ao maior n&uacute;mero de perguntas no menor
				tempo ser&atilde;o os vencedores.
			</li>
		</ol>
		<p>&nbsp;</p>
		<ol>
			<li><strong> TERMOS E CONDI&Ccedil;&Otilde;ES</strong></li>
		</ol>
		<p>
			<strong
				>NENHUMA COMPRA OU PAGAMENTO DE QUALQUER TIPO &Eacute; NECESS&Aacute;RIO PARA PARTICIPAR
				DESTA COMPETI&Ccedil;&Atilde;O.</strong
			>
		</p>
		<ol>
			<li>
				Ao participar, voc&ecirc; concorda em aceitar e reconhecer os termos e
				condi&ccedil;&otilde;es de <strong>DA COMPETI&Ccedil;&Atilde;O.</strong>
			</li>
			<li>
				Essa competi&ccedil;&atilde;o &eacute; organizada pela Compa&ntilde;&iacute;a
				Paname&ntilde;a de Aviaci&oacute;n, S.A. (Copa Airlines), com sede na Urbanizaci&oacute;n
				Costa del Este, Complejo Business Park, Torre Norte, Cidade do Panam&aacute;,
				Rep&uacute;blica do Panam&aacute;.
			</li>
			<li>
				A competi&ccedil;&atilde;o est&aacute; aberta a pessoas com 18 anos de idade ou mais no
				momento da inscri&ccedil;&atilde;o. A Copa Airlines tem o direito de verificar a
				elegibilidade de cada participante.
			</li>
			<li>
				A competi&ccedil;&atilde;o se aplicar&aacute; somente aos pa&iacute;ses onde a Copa Airlines
				mant&eacute;m opera&ccedil;&otilde;es, exceto em restri&ccedil;&otilde;es estabelecidas
				neste documento.
			</li>
			<li>O participante deve ser um seguidor da conta do Instagram @CopaAirlinesbr.</li>
			<li>
				Ser&aacute; aceita apenas uma inscri&ccedil;&atilde;o (participa&ccedil;&atilde;o) por
				usu&aacute;rio.
			</li>
			<li>
				Se o participante tiver sido ganhador, n&atilde;o poder&aacute; participar dos concursos nos
				POSTs OFICIAIS feitos nas semanas seguintes.
			</li>
			<li>
				Qualquer usu&aacute;rio que n&atilde;o seguir todos os passos e cumprir todos os requisitos
				exigidos pela Copa Airlines ser&aacute; automaticamente eliminado da
				competi&ccedil;&atilde;o.
			</li>
			<li>
				Os perfis que tiverem mais de 10.000 (dez mil) seguidores, contas de animais de
				estima&ccedil;&atilde;o, contas usadas para fins comerciais ou de neg&oacute;cios, em nome
				de uma pessoa jur&iacute;dica, ou que forem considerados falsos ou estiverem cometendo atos
				fraudulentos ser&atilde;o removidos da competi&ccedil;&atilde;o.
			</li>
			<li>
				Ser&atilde;o escolhidos 10 vencedores. As 10 pessoas que responderem corretamente ao maior
				n&uacute;mero de perguntas, no menor tempo poss&iacute;vel, e atenderem aos requisitos
				estabelecidos neste documento ser&atilde;o os vencedores. Os vencedores ser&atilde;o
				anunciados em nossa conta oficial do Instagram @CopaAirlinesbr e em qualquer outra rede
				oficial que a Copa Airlines considere.
			</li>
			<li>
				Os vencedores ser&atilde;o anunciados no m&aacute;ximo sete (7) dias corridos ap&oacute;s a
				data de encerramento da competi&ccedil;&atilde;o.
			</li>
			<li>
				Esta competi&ccedil;&atilde;o n&atilde;o se aplica a funcion&aacute;rios da Copa Airlines,
				Aero Rep&uacute;blica, Copa Airlines Col&ocirc;mbia e La Nueva Aerol&iacute;nea, S.A. e
				filiais, fornecedores dessas empresas, ou funcion&aacute;rios de ag&ecirc;ncias de
				publicidade, influenciadores ou criadores de conte&uacute;do que mantenham acordos
				comerciais com elas.
			</li>
			<li>
				Qualquer dano ou perda (direta, indireta ou consequente) ao ganhador e/ou seu acompanhante
				ou propriedade devido &agrave; culpa ou neglig&ecirc;ncia do ganhador ou qualquer causa
				n&atilde;o atribu&iacute;vel &agrave; Copa Airlines, em conex&atilde;o com sua
				participa&ccedil;&atilde;o no concurso ou a aceita&ccedil;&atilde;o, uso e aproveitamento
				dos pr&ecirc;mios, &eacute; de responsabilidade exclusiva do ganhador e/ou seu acompanhante.
			</li>
			<li>
				Qualquer tentativa de violar qualquer uma das regras da competi&ccedil;&atilde;o ou de
				fornecer informa&ccedil;&otilde;es falsas com a inten&ccedil;&atilde;o de fraudar
				ser&aacute; processada de acordo com as leis aplic&aacute;veis. Ao participar desta
				competi&ccedil;&atilde;o, os participantes concordam e aceitam a aplica&ccedil;&atilde;o
				estrita destas regras em todos os termos. Qualquer inscri&ccedil;&atilde;o que seja
				alterada, forjada ou manipulada de outra forma para alegar ser o vencedor ser&aacute;
				anulada. Os participantes s&atilde;o os &uacute;nicos respons&aacute;veis por qualquer
				situa&ccedil;&atilde;o presente ou futura que ocorra devido a sua pr&oacute;pria culpa ou
				neglig&ecirc;ncia ou por qualquer causa n&atilde;o atribu&iacute;vel &agrave; Copa Airlines,
				em conex&atilde;o com sua participa&ccedil;&atilde;o neste concurso ou decorrente de sua
				aceita&ccedil;&atilde;o dos pr&ecirc;mios ou uso dos pr&ecirc;mios que comp&otilde;em a
				competi&ccedil;&atilde;o.
			</li>
			<li>
				O ganhador e seu acompanhante concedem &agrave; Copa Airlines e &agrave;s suas
				ag&ecirc;ncias de publicidade e rela&ccedil;&otilde;es p&uacute;blicas o direito de publicar
				ou anunciar seu nome e de usar fotografias ou grava&ccedil;&otilde;es de v&iacute;deo que
				incluam sua imagem e/ou voz, em qualquer meio de publicidade sem qualquer
				compensa&ccedil;&atilde;o, dentro ou fora do territ&oacute;rio panamenho, em qualquer meio
				de publicidade ou comunica&ccedil;&atilde;o existente ou futuro, por um per&iacute;odo de 12
				(doze) meses ap&oacute;s o in&iacute;cio da competi&ccedil;&atilde;o.
			</li>
			<li>
				Como requisito para a aceita&ccedil;&atilde;o do pr&ecirc;mio, o ganhador e seu acompanhante
				assinar&atilde;o uma carta de aceita&ccedil;&atilde;o do pr&ecirc;mio, uma
				isen&ccedil;&atilde;o de responsabilidade e quaisquer outros documentos exigidos pela Copa
				Airlines, referentes aos termos e condi&ccedil;&otilde;es relacionados &agrave;
				aceita&ccedil;&atilde;o e uso dos pr&ecirc;mios a serem fornecidos pela Copa Airlines.
			</li>
			<li>
				Qualquer pessoa que esteja fazendo altera&ccedil;&otilde;es no processo de
				opera&ccedil;&otilde;es do concurso ou violando leis oficiais e que n&atilde;o cumpra as
				condi&ccedil;&otilde;es estabelecidas nestas regras ser&aacute; desqualificada.
			</li>
			<li>
				Compa&ntilde;&iacute;a Paname&ntilde;a de Aviaci&oacute;n S.A. (Copa Airlines), reserva-se o
				direito de desclassificar e/ou exigir a devolu&ccedil;&atilde;o dos benef&iacute;cios
				concedidos aos participantes que, na opini&atilde;o da Copa Airlines, descumprirem direta ou
				indiretamente as regras e condi&ccedil;&otilde;es aqui estabelecidas.
			</li>
			<li>
				As informa&ccedil;&otilde;es coletadas dos participantes est&atilde;o sujeitas &agrave;
				Pol&iacute;tica de Privacidade da Copa Airlines, que pode ser encontrada em
				https://www.copaair.com/es/web/pa/politica-privacidad.
			</li>
			<li>
				Ao aceitar estes termos e condi&ccedil;&otilde;es, autoriza-se expressamente a Copa Airlines
				a coletar todas as informa&ccedil;&otilde;es necess&aacute;rias para fins de
				participa&ccedil;&atilde;o na competi&ccedil;&atilde;o. As informa&ccedil;&otilde;es que
				voc&ecirc; fornecer ser&atilde;o usadas somente em conex&atilde;o com este concurso ou
				outras atividades promocionais ou outras atividades da Copa Airlines e do Fundo de
				Promo&ccedil;&atilde;o Tur&iacute;stica do Panam&aacute; (PROMTUR). A COPA AIRLINES
				tamb&eacute;m se compromete a realizar todos os esfor&ccedil;os para proteger os dados
				pessoais dos participantes de acordo com as leis de prote&ccedil;&atilde;o de dados
				aplic&aacute;veis. Todos os participantes, pelo simples fato de participarem desta
				promo&ccedil;&atilde;o, autorizam expressamente a COPA AIRLINES a transferir para suas
				empresas afiliadas e representantes autorizados as informa&ccedil;&otilde;es, dados e
				documentos fornecidos pelos participantes.
			</li>
			<li>
				Dadas as caracter&iacute;sticas inerentes ao ambiente da Internet, a Copa Airlines
				n&atilde;o ser&aacute; respons&aacute;vel por transmiss&otilde;es incompletas ou falhas de
				computador ou falhas t&eacute;cnicas de qualquer tipo, incluindo mau funcionamento
				eletr&ocirc;nico de qualquer rede, hardware ou software, disponibilidade e acesso &agrave;
				Internet, tentativas de acesso de hackers, ou qualquer informa&ccedil;&atilde;o incorreta ou
				incompleta do concurso e quaisquer falhas humanas, t&eacute;cnicas ou outras que possam
				ocorrer durante o processamento das inscri&ccedil;&otilde;es e, portanto, qualquer
				responsabilidade decorrente de tais eventos ou atos.
			</li>
			<li>
				Os vencedores deste concurso concedem uma licen&ccedil;a perp&eacute;tua,
				irrevog&aacute;vel, mundial e n&atilde;o exclusiva &agrave; Copa Airlines e a seus
				representantes autorizados para reproduzir, distribuir e criar trabalhos derivados das
				inscri&ccedil;&otilde;es ou do conte&uacute;do postado em conex&atilde;o com o concurso e a
				promo&ccedil;&atilde;o do concurso em qualquer m&iacute;dia atualmente conhecida ou
				desenvolvida no futuro. Essa licen&ccedil;a &eacute; concedida gratuitamente.
			</li>
			<li>
				Cada participante renuncia a todas as reclama&ccedil;&otilde;es contra a Copa Airlines, o
				Instagram, o Facebook e cada uma de suas respectivas empresas controladoras, afiliadas,
				subsidi&aacute;rias, executivos, diretores, funcion&aacute;rios, agentes, licenciados,
				distribuidores, revendedores, varejistas e impressores, representantes e ag&ecirc;ncias de
				publicidade e todas as demais empresas associadas &agrave; competi&ccedil;&atilde;o, seus
				respectivos funcion&aacute;rios, diretores, empregados, agentes e representantes por
				qualquer les&atilde;o, dano ou perda que possa ocorrer, direta ou indiretamente, no todo ou
				em parte, da participa&ccedil;&atilde;o na competi&ccedil;&atilde;o ou do recebimento ou uso
				de qualquer pr&ecirc;mio (ou qualquer parte dele) ou qualquer viagem ou atividade
				relacionada ao recebimento ou uso de qualquer pr&ecirc;mio (ou qualquer parte dele).
			</li>
			<li>
				Ao participar desta competi&ccedil;&atilde;o, cada participante concorda em exonerar e
				liberar totalmente a Copa Airlines de qualquer responsabilidade legal, administrativa,
				comercial/civil ou de qualquer outra natureza e concorda em n&atilde;o apresentar qualquer
				reclama&ccedil;&atilde;o e/ou a&ccedil;&atilde;o legal contra a Copa Airlines em qualquer
				tribunal de justi&ccedil;a, administrativo ou judicial, ou em qualquer outra
				jurisdi&ccedil;&atilde;o, como consequ&ecirc;ncia da aceita&ccedil;&atilde;o do pr&ecirc;mio
				e da participa&ccedil;&atilde;o nas atividades relacionadas ao mesmo.
			</li>
			<li>
				Os termos e condi&ccedil;&otilde;es desta competi&ccedil;&atilde;o s&atilde;o regidos pela
				legisla&ccedil;&atilde;o brasileira, e os tribunais brasileiros ter&atilde;o
				jurisdi&ccedil;&atilde;o sobre todas as quest&otilde;es decorrentes da
				interpreta&ccedil;&atilde;o e/ou cumprimento e/ou desenvolvimento desta
				competi&ccedil;&atilde;o.
			</li>
			<li>
				Os endere&ccedil;os s&atilde;o considerados v&aacute;lidos para todos os fins desta
				competi&ccedil;&atilde;o: da Compa&ntilde;&iacute;a Paname&ntilde;a de Aviaci&oacute;n, S.A.
				(Copa Airlines) localizada na Urbanizaci&oacute;n Costa del Este, Complejo Business Park,
				Torre Norte, Cidade do Panam&aacute;, Rep&uacute;blica do Panam&aacute; e a dos ganhadores,
				titulares ou suplentes, assim como de seus acompanhantes, que denunciam na
				Exonera&ccedil;&atilde;o de Responsabilidade/Autoriza&ccedil;&atilde;o de
				Publica&ccedil;&atilde;o/Consentimento de Informa&ccedil;&atilde;o de Dados Pessoais.
			</li>
			<li>
				O Instagram n&atilde;o se responsabiliza por essa competi&ccedil;&atilde;o e os dados
				adquiridos ser&atilde;o gerenciados por nossa empresa.
			</li>
			<li>
				A Copa Airlines n&atilde;o assume nenhuma responsabilidade pelos servi&ccedil;os prestados
				pelos hot&eacute;is participantes. Quaisquer problemas, preocupa&ccedil;&otilde;es,
				reclama&ccedil;&otilde;es ou incidentes que surjam durante a estadia no hotel s&atilde;o de
				responsabilidade exclusiva do hotel indicado na carta de premia&ccedil;&atilde;o. O vencedor
				e os convidados que o acompanham entendem e concordam que a Copa Airlines n&atilde;o tem
				controle sobre as a&ccedil;&otilde;es, pol&iacute;ticas, servi&ccedil;os ou
				condi&ccedil;&otilde;es do hotel.
			</li>
			<li>
				S&oacute; poder&atilde;o participar do concurso pessoas residentes no Brasil. A Copa
				Airlines solicitar&aacute; a cada ganhador e seu acompanhante um comprovante de
				resid&ecirc;ncia, antes de anunciar os vencedores.
			</li>
		</ol>
		<p>&nbsp;</p>
		<ol>
			<li><strong> NOTIFICA&Ccedil;&Atilde;O DOS VENCEDORES:</strong></li>
			<li>
				O vencedor ser&aacute; notificado por meio do endere&ccedil;o de e-mail fornecido no momento
				de sua participa&ccedil;&atilde;o na <strong>COMPETI&Ccedil;&Atilde;O,</strong> ou por outros
				canais que a Copa Airlines decidir implementar.
			</li>
			<li>
				A notifica&ccedil;&atilde;o por e-mail ao vencedor incluir&aacute; uma carta de
				isen&ccedil;&atilde;o de responsabilidade, uma carta de aceita&ccedil;&atilde;o do
				pr&ecirc;mio e qualquer outra carta que a Copa Airlines possa exigir, indicando que o
				vencedor recebeu <strong>O PR&Ecirc;MIO</strong>.
			</li>
			<li>
				O ganhador dever&aacute; enviar a carta de isen&ccedil;&atilde;o de responsabilidade, a
				carta de aceita&ccedil;&atilde;o do pr&ecirc;mio, os passaportes v&aacute;lidos dele e de
				seu acompanhante, um comprovante de resid&ecirc;ncia no Brasil (conta de luz, g&aacute;s,
				&aacute;gua telefone) e qualquer outro documento exigido pela Copa Airlines, para
				promociones@copaair.com ou por qualquer outro meio solicitado pela Copa Airlines, dentro de
				72 (setenta e duas) horas ap&oacute;s ser notificado como ganhador da <strong
					>COMPETI&Ccedil;&Atilde;O</strong
				>, a fim de aceitar <strong>o PR&Ecirc;MIO</strong>.
			</li>
			<li>
				Caso algum dos ganhadores n&atilde;o responda ao e-mail e/ou n&atilde;o envie as
				informa&ccedil;&otilde;es solicitadas pela Copa Airlines, dentro do prazo indicado, o <strong
					>PR&Ecirc;MIO</strong
				> ser&aacute; perdido e o segundo colocado seguinte ser&aacute; considerado o novo ganhador,
				sem que isso represente uma inadimpl&ecirc;ncia por parte da Copa Airlines.
			</li>
			<li>
				Qualquer resposta ap&oacute;s 72 horas ser&aacute; considerada nula e o participante
				n&atilde;o ter&aacute; direito a nenhuma reivindica&ccedil;&atilde;o presente ou futura
				contra a Copa Airlines.
			</li>
			<li><strong> O PR&Ecirc;MIO</strong></li>
			<li>
				Duas (2) passagens de ida e volta, uma para o vencedor e outra para seu acompanhante, via
				Copa Airlines, para viajar &agrave; Cidade do Panam&aacute;, Rep&uacute;blica do
				Panam&aacute;, a partir de qualquer destino servido pela Copa Airlines.
			</li>
			<li>
				Uma (1) estadia em quarto duplo de 3 noites em hot&eacute;is de 3 ou 4 estrelas na
				Rep&uacute;blica do Panam&aacute; (aplica-se as restri&ccedil;&otilde;es e os termos e
				condi&ccedil;&otilde;es de cada hotel).
			</li>
		</ol>
		<p>&nbsp;</p>
		<ol>
			<li><strong> RESTRI&Ccedil;&Otilde;ES DE PR&Ecirc;MIOS </strong></li>
		</ol>
		<p><strong>Restri&ccedil;&otilde;es de passagens a&eacute;reas:</strong></p>
		<ol>
			<li>
				As passagens ser&atilde;o v&aacute;lidas de 15 de outubro de 2023 a 31 de dezembro de 2024
				per&iacute;odo durante o qual a emiss&atilde;o e a viagem (ida e volta) do n&uacute;mero
				total de bilhetes concedidos dever&atilde;o ser conclu&iacute;das.
			</li>
			<li>
				O vencedor e seu acompanhante de viagem devem iniciar e terminar a viagem nas mesmas datas;
				ou seja, eles devem viajar juntos o tempo todo.
			</li>
			<li>
				As passagens s&atilde;o v&aacute;lidas para viagens na COPA AIRLINES em classe
				econ&ocirc;mica.
			</li>
			<li>
				Depois que a reserva for emitida, voc&ecirc; dever&aacute; ir a um de nossos centros de
				atendimento ao cliente dentro de 48 horas.
			</li>
			<li>
				As passagens n&atilde;o podem ser usadas durante a alta temporada. O per&iacute;odo de alta
				temporada inclui as seguintes datas: Carnavais no Panam&aacute;, Semana Santa, de 15 de
				junho a 31 de agosto, Festas P&aacute;trias no Panam&aacute;, A&ccedil;&atilde;o de
				Gra&ccedil;as nos Estados Unidos, Natal e Ano Novo.
			</li>
			<li>
				Os bilhetes n&atilde;o s&atilde;o transfer&iacute;veis, reembols&aacute;veis em dinheiro ou
				transfer&iacute;veis para outras companhias a&eacute;reas. Eles n&atilde;o podem ser
				vendidos, trocados ou estendidos ap&oacute;s a data de validade, nem s&atilde;o permitidos
				redirecionamentos.
			</li>
			<li>
				S&oacute; ser&aacute; permitida uma altera&ccedil;&atilde;o de data, sendo que esta
				altera&ccedil;&atilde;o estar&aacute; sujeita &agrave; disponibilidade e ser&atilde;o
				aplicadas as mesmas condi&ccedil;&otilde;es aqui estabelecidas. A data de validade do
				bilhete n&atilde;o pode ser prorrogada, ou seja, a altera&ccedil;&atilde;o solicitada
				dever&aacute; ser feita dentro do prazo de validade indicado no n&uacute;mero 1 desta
				se&ccedil;&atilde;o.
			</li>
			<li>
				As passagens devem ser solicitadas com pelo menos trinta (30) dias de anteced&ecirc;ncia da
				data da viagem. A COPA AIRLINES n&atilde;o garante a disponibilidade de voos.
			</li>
			<li>
				Este Contrato n&atilde;o prev&ecirc; franquia de bagagem ou desconto por excesso de peso. A
				franquia de bagagem gratuita, ou seja, a franquia de bagagem, o peso e as dimens&otilde;es,
				ser&atilde;o aqueles em vigor no momento do resgate do bilhete para a classe de tarifa
				correspondente, sendo responsabilidade de cada vencedor validar a franquia de bagagem
				gratuita em vigor.
			</li>
			<li>
				Por motivos de disponibilidade, a COPA AIRLINES n&atilde;o pode garantir que sua bagagem
				ser&aacute; enviada no voo designado e poder&aacute; chegar em hor&aacute;rios diferentes do
				seu hor&aacute;rio de chegada.
			</li>
			<li>
				A COPA AIRLINES n&atilde;o se responsabiliza pela documenta&ccedil;&atilde;o, pap&eacute;is
				ou identifica&ccedil;&atilde;o que cada passageiro precisa para viajar.
			</li>
			<li>
				As despesas incorridas pelo vencedor e seu acompanhante durante a viagem na Cidade do
				Panam&aacute;, n&atilde;o ser&atilde;o de responsabilidade da Copa Airlines.
			</li>
			<li>
				N&atilde;o obstante o acima exposto, caso no futuro a COPA AIRLINES n&atilde;o continue a
				operar seus servi&ccedil;os para a origem de onde o ganhador viajar&aacute;, o ganhador e
				seu acompanhante n&atilde;o ter&atilde;o direito a nenhum tipo de compensa&ccedil;&atilde;o
				e, em tais circunst&acirc;ncias, dever&atilde;o voar a partir de um destino diferente onde a
				COPA AIRLINES tenha opera&ccedil;&otilde;es.
			</li>
			<li>
				As passagens a&eacute;reas que fazem parte dos pr&ecirc;mios deste concurso n&atilde;o
				acumulam milhas do programa de milhagem da Copa Airlines, ConnectMiles, ou das companhias
				a&eacute;reas membros da rede Star Alliance. Eles tamb&eacute;m n&atilde;o s&atilde;o
				v&aacute;lidos para altera&ccedil;&otilde;es de status ou promo&ccedil;&otilde;es nesses
				programas de fidelidade.
			</li>
			<li>
				Os passageiros que viajam s&atilde;o respons&aacute;veis por cumprir as leis
				aplic&aacute;veis e os requisitos de sa&uacute;de de cada destino visitado.
			</li>
			<li>
				Voos sujeitos a restri&ccedil;&otilde;es, aprova&ccedil;&otilde;es governamentais e
				altera&ccedil;&otilde;es. Alguns pa&iacute;ses mant&ecirc;m restri&ccedil;&otilde;es de
				entrada. &Eacute; de responsabilidade do ganhador e de seu acompanhante verificar os
				requisitos de imigra&ccedil;&atilde;o, biosseguran&ccedil;a e sa&uacute;de para entrar em
				qualquer um de nossos destinos (Copa Airlines).
			</li>
			<li>
				Qualquer les&atilde;o, perda ou dano (direto, indireto ou consequente) causado ao GANHADOR,
				acompanhante ou sua propriedade devido a sua culpa ou neglig&ecirc;ncia ou qualquer causa
				n&atilde;o atribu&iacute;vel &agrave; Copa Airlines, em conex&atilde;o com a
				aceita&ccedil;&atilde;o, uso e aproveitamento dos bilhetes &eacute; de responsabilidade
				exclusiva do GANHADOR. Mesmo se a les&atilde;o, perda ou dano for decorrente de for&ccedil;a
				maior.
			</li>
			<li>
				&Eacute; de responsabilidade exclusiva do vencedor e de seu acompanhante ter toda a
				documenta&ccedil;&atilde;o de viagem necess&aacute;ria, incluindo, entre outros,
				passaportes, vistos e quaisquer outros documentos exigidos pelas leis aplic&aacute;veis, e
				um passaporte v&aacute;lido &eacute; um pr&eacute;-requisito para a
				participa&ccedil;&atilde;o nesta competi&ccedil;&atilde;o. Da mesma forma, &eacute;
				responsabilidade exclusiva do ganhador e de seu acompanhante verificar que sua
				documenta&ccedil;&atilde;o cumpra com todos os requisitos necess&aacute;rios para poder
				utiliz&aacute;-la efetivamente no momento da viagem, j&aacute; que, se esses requisitos
				n&atilde;o forem cumpridos, os ganhadores ser&atilde;o desclassificados, sem direito a
				reclama&ccedil;&otilde;es presentes ou futuras de qualquer tipo.
			</li>
			<li>
				Caso o acompanhante seja menor de idade e n&atilde;o esteja viajando com um de seus pais, os
				pais com autoridade parental ou guardi&atilde;o legal devem fornecer prova de
				identifica&ccedil;&atilde;o e relacionamento com o menor e devem ter cumprido a
				permiss&atilde;o de sa&iacute;da do menor ordenada pela Autoridade de
				Imigra&ccedil;&atilde;o de acordo com a legisla&ccedil;&atilde;o de cada pa&iacute;s de
				resid&ecirc;ncia; ou, caso contr&aacute;rio, uma autoriza&ccedil;&atilde;o por escrito para
				que a crian&ccedil;a viaje. As consequ&ecirc;ncias da n&atilde;o conformidade com os
				requisitos estabelecidos neste ponto ser&atilde;o de responsabilidade direta dos vencedores.
			</li>
			<li>
				Caso o local de resid&ecirc;ncia do ganhador e de seu acompanhante n&atilde;o seja uma
				cidade onde a Copa Airlines opere, o ganhador e seu acompanhante dever&atilde;o viajar por
				seus pr&oacute;prios meios para uma cidade onde a Copa Airlines opere e, em seguida, viajar
				por seus pr&oacute;prios meios para seu local de resid&ecirc;ncia.
			</li>
			<li>
				A Copa Airlines n&atilde;o se responsabiliza caso o ganhador ou seu acompanhante n&atilde;o
				possa viajar nas datas permitidas.
			</li>
			<li>
				Em caso de "No Show" (o passageiro n&atilde;o chega no hor&aacute;rio de decolagem ou a
				tempo para o embarque), a Copa Airlines n&atilde;o se responsabiliza e o ganhador e seu
				acompanhante n&atilde;o ter&atilde;o o direito de solicitar uma nova data de viagem.
			</li>
			<li>
				Qualquer atraso, cancelamento de voo, desvio de rota ou mudan&ccedil;a operacional que se
				deva a raz&otilde;es baseadas na prote&ccedil;&atilde;o da vida humana, seguran&ccedil;a ou
				condi&ccedil;&otilde;es clim&aacute;ticas adversas ou outros atos de for&ccedil;a maior,
				n&atilde;o ser&aacute; considerado uma viola&ccedil;&atilde;o do contrato de transporte ou
				dos termos e condi&ccedil;&otilde;es deste concurso, nem implicar&aacute; qualquer
				responsabilidade de qualquer tipo para a Copa Airlines. Da mesma forma, o vencedor reconhece
				e aceita essa disposi&ccedil;&atilde;o antes da aceita&ccedil;&atilde;o efetiva dos bilhetes
				premiados.
			</li>
		</ol>
		<p>&nbsp;</p>
		<p><strong>Restri&ccedil;&otilde;es para estadias nos hot&eacute;is participantes:</strong></p>
		<ol>
			<li>
				Ao aceitar o pr&ecirc;mio da estadia no hotel, o vencedor e qualquer acompanhante isentam a
				COPA AIRLINES, afiliadas, funcion&aacute;rios e agentes de toda e qualquer responsabilidade
				relacionada &agrave; estadia no hotel indicado, incluindo, entre outros, danos pessoais,
				danos &agrave; propriedade, perdas, despesas, reclama&ccedil;&otilde;es ou demandas de
				qualquer tipo que possam surgir como resultado da estadia.
			</li>
		</ol>
		<p>&nbsp;</p>
		<ol start="2">
			<li>
				As estadias que fazem parte dos Pr&eacute;mios deste concurso n&atilde;o acumulam pontos do
				programa de fideliza&ccedil;&atilde;o do Marriott Bonvoy ou Wyndham Rewards. Os
				benef&iacute;cios tamb&eacute;m n&atilde;o se aplicam de acordo com o status do programa de
				fidelidade.
			</li>
			<li>
				O pr&ecirc;mio inclui uma estadia de 3 noites em quarto duplo em um estabelecimento de 3 a 4
				estrelas participante no territ&oacute;rio da Rep&uacute;blica do Panam&aacute;. A Copa
				Airlines se reserva o direito de designar qualquer um dos hot&eacute;is participantes com
				base na disponibilidade. O pr&ecirc;mio n&atilde;o &eacute; transfer&iacute;vel nem pode ser
				trocado por dinheiro ou outros produtos.
			</li>
		</ol>
		<p>&nbsp;</p>
		<ol start="4">
			<li>
				A estadia no hotel inclui pequeno-almo&ccedil;o di&aacute;rio no restaurante, acesso
				&agrave; Internet no quarto e zonas p&uacute;blicas, utiliza&ccedil;&atilde;o do
				gin&aacute;sio e spa nos hor&aacute;rios indicados.
			</li>
			<li>
				A Copa Airlines ir&aacute; designar aos vencedores hospedagem em um dos hot&eacute;is
				participantes do concurso, os quais est&atilde;o dispostos neste regulamento, conforme
				disponibilidade.
			</li>
			<li>
				Qualquer dano causado pelo vencedor ou seus acompanhantes &agrave;s
				instala&ccedil;&otilde;es do hotel ou a outros h&oacute;spedes ser&aacute; de
				responsabilidade exclusiva do vencedor. A Copa Airlines n&atilde;o assumir&aacute; nenhum
				custo ou responsabilidade por tais danos.
			</li>
			<li>
				O vencedor e seu acompanhante aceitam e reconhecem que cada hotel tem seus pr&oacute;prios
				termos, condi&ccedil;&otilde;es e regras que regem a estadia e o uso de suas
				instala&ccedil;&otilde;es. Alguns desses termos est&atilde;o inclu&iacute;dos, mas
				n&atilde;o limitados, neste documento. O ganhador e os convidados que o acompanham concordam
				que a Copa Airlines n&atilde;o &eacute; respons&aacute;vel pelas regras e
				condi&ccedil;&otilde;es de cada hotel e que &eacute; de sua responsabilidade
				analis&aacute;-las e cumpri-las.
			</li>
			<li>
				Quaisquer despesas incorridas pelo ganhador e seu acompanhante dentro das
				instala&ccedil;&otilde;es do hotel ser&atilde;o de responsabilidade exclusiva do ganhador e
				de seu acompanhante.
			</li>
			<li>
				A Copa Airlines se reserva o direito de designar aleatoriamente um dos hot&eacute;is
				participantes para a estadia. O vencedor e seus acompanhantes aceitam essa
				atribui&ccedil;&atilde;o e entendem que n&atilde;o poder&atilde;o solicitar mudan&ccedil;as
				de hotel.
			</li>
		</ol>
		<p>&nbsp;</p>
		<p><strong>Termos e Condi&ccedil;&otilde;es Grupo Verde Azul</strong></p>
		<p>
			<strong
				><u
					>Pol&iacute;ticas e condi&ccedil;&otilde;es da Reserva Pr&ecirc;mio Marriot Panam&aacute;
					e da Reserva Pr&ecirc;mio Villa Marina:</u
				></strong
			>
		</p>
		<ol>
			<li>
				Estadia para 2 pessoas com caf&eacute; da manh&atilde; di&aacute;rio no restaurante, acesso
				&agrave; internet nas &aacute;reas p&uacute;blicas e no quarto, acesso &agrave;s
				&aacute;reas comuns (piscina e academia).
			</li>
			<li>
				Ocupa&ccedil;&atilde;o m&aacute;xima em um quarto para 2 adultos e 2 crian&ccedil;as de
				at&eacute; 11 anos de idade, em camas existentes. Crian&ccedil;as de at&eacute; 11 anos de
				idade n&atilde;o pagam no quarto acompanhadas por um adulto.
			</li>
			<li>Cancelamento sem penalidade at&eacute; as 18:00 horas, 2 dias antes da chegada.</li>
			<li>Em caso de n&atilde;o comparecimento, a estadia ser&aacute; cancelada.</li>
			<li>
				Ser&aacute; permitida a altera&ccedil;&atilde;o da data da reserva, sujeita &agrave;
				disponibilidade de quartos.
			</li>
			<li>
				Para altera&ccedil;&otilde;es adicionais, ser&aacute; cobrada uma taxa de $ 75 mais impostos
				do hotel (10%) por altera&ccedil;&atilde;o.
			</li>
			<li>O custo por pessoa adicional &eacute; de $ 20, mais impostos do hotel (10%).</li>
			<li>
				Animais de estima&ccedil;&atilde;o s&atilde;o permitidos: O Marriott Panama oferece
				at&eacute; 2 animais de estima&ccedil;&atilde;o por um custo adicional de $ 75 mais imposto
				hoteleiro (10%) por estadia e por animal.
			</li>
			<li>
				Todas as reservas devem ser garantidas com um cart&atilde;o de cr&eacute;dito v&aacute;lido.
				O m&eacute;todo de pagamento ser&aacute; solicitado no check-in. Caso n&atilde;o seja
				apresentada a garantia, qualquer despesa incorrida dentro do hotel dever&aacute; ser paga no
				momento da apresenta&ccedil;&atilde;o da conta
			</li>
			<li>
				O hor&aacute;rio de check-in come&ccedil;a &agrave;s 15h00 e o checkout &agrave;s 12h00.
			</li>
			<li>
				Pedidos especiais como ber&ccedil;os, camas extra, quartos comunicantes ou adjacentes ou
				outros pedidos dever&atilde;o ser informados antes da chegada e estar&atilde;o sujeitos a
				disponibilidade.
			</li>
			<li>
				As estadias nesses hot&eacute;is n&atilde;o podem ser usadas de 8 a 17 de setembro de 2023,
				1 a 30 de novembro de 2023, 8 a 10 de dezembro de 2023, 21 a 31 de dezembro de 2023, 1 de
				janeiro a 31 de mar&ccedil;o de 2024, Feriados escolares do Panam&aacute;, 1 a 30 de
				novembro de 2024, 21 a 31 de dezembro de 2024, 1 a 5 de janeiro de 2025.
			</li>
		</ol>
		<p>&nbsp;</p>
		<p>
			<strong
				><u>Pol&iacute;ticas e condi&ccedil;&otilde;es &ndash; Marriot Panam&aacute;</u></strong
			>
		</p>
		<ol>
			<li>
				Datas que n&atilde;o se aplicam reservas: 18 a 27 de outubro de 2023, 6 a 8 de novembro de
				2023, 13 a 17 de novembro de 2023.
			</li>
			<li>
				Podem ser aplicadas datas de indisponibilidade adicionais. Consulte diretamente com a
				propriedade
			</li>
			<li>
				Solicita&ccedil;&otilde;es especiais e altera&ccedil;&otilde;es dever&atilde;o ser enviadas
				para o e-mail reservas@marriottpanamahotel.com, com os dados da reserva.
			</li>
		</ol>
		<p>&nbsp;</p>
		<p>
			<strong><u>Pol&iacute;ticas e condi&ccedil;&otilde;es </u></strong><strong
				><u>Villa Marina Lodge &amp; Condos</u></strong
			>
		</p>
		<p>&nbsp;</p>
		<ol>
			<li>
				Datas que n&atilde;o se aplicam reservas: 1 a 30 de novembro de 2023, 8 a 10 de dezembro de
				2023, 22 a 31 de dezembro de 2023, 1 a 6 de janeiro de 2024, 9 a 13 de janeiro de 2024, 9 a
				13 de fevereiro de 2024, 28 a 30 de mar&ccedil;o de 2024. F&eacute;rias escolares no
				Panam&aacute; de 2024.
			</li>
			<li>
				Podem ser aplicadas datas de indisponibilidade adicionais. Consulte diretamente com a
				propriedade
			</li>
			<li>
				Pedidos especiais e altera&ccedil;&otilde;es dever&atilde;o ser enviados para o e-mail
				reservas@villamarina.com.pa, com os dados da reserva.
			</li>
		</ol>
		<p>&nbsp;</p>
		<p>
			<strong><u>Pol&iacute;ticas e condi&ccedil;&otilde;es </u></strong><strong
				><u>The Santa Maria a Luxury Collection Hotel &amp; Golf Resort:</u></strong
			>
		</p>
		<ol>
			<li>
				Datas que n&atilde;o se aplicam reservas: 2 a 5 de outubro de 2023, 22 a 31 de dezembro de
				2023, 1 e 2 de janeiro de 2024, 15 a 21 de janeiro de 2024, 28 e 29 de fevereiro de 2024, 13
				a 15 de mar&ccedil;o de 2024.
			</li>
			<li>
				Podem ser aplicadas datas de indisponibilidade adicionais. Consulte diretamente com a
				propriedade
			</li>
			<li>
				Solicita&ccedil;&otilde;es especiais e altera&ccedil;&otilde;es dever&atilde;o ser enviadas
				para o e-mail reservas@bristolpanama.com, com os dados da reserva.
			</li>
		</ol>
		<p>&nbsp;</p>
		<p>
			<strong
				><u>Pol&iacute;ticas e Condi&ccedil;&otilde;es - Bristol Panama a Registry Collection:</u
				></strong
			>
		</p>
		<ol>
			<li>
				Datas que n&atilde;o se aplicam reservas: 17 a 25 de novembro de 2023, 29 e 30 de dezembro
				de 2023.
			</li>
			<li>
				Podem ser aplicadas datas de indisponibilidade adicionais. Consulte diretamente com a
				propriedade.
			</li>
			<li>
				Solicita&ccedil;&otilde;es especiais e altera&ccedil;&otilde;es dever&atilde;o ser enviadas
				para o e-mail reservas@bristolpanama.com, com os dados da reserva.
			</li>
		</ol>
		<p>&nbsp;</p>
		<p>
			<strong
				><u
					>Pol&iacute;ticas e Condi&ccedil;&otilde;es - The Buenaventura Golf &amp; Beach Resort -
					Autograph Collection:</u
				></strong
			>
		</p>
		<ol>
			<li>
				Datas que n&atilde;o se aplicam reservas: 3 a 5 de novembro de 2023, 10 e 11 de novembro de
				2023, 8 e 9 de dezembro de 2023, 23 a 31 de dezembro de 2023, 1 a 3 de janeiro de 2024, 5 e
				6 de fevereiro de 2024, 10 a 17 de fevereiro de 2024, 1 a 31 de mar&ccedil;o de 2024, 18 a
				20 de abril de 2024; 22 a 29 de abril de 2024.
			</li>
			<li>
				Podem ser aplicadas datas de indisponibilidade adicionais. Consulte diretamente com a
				propriedade
			</li>
			<li>
				Solicita&ccedil;&otilde;es especiais e altera&ccedil;&otilde;es dever&atilde;o ser enviadas
				para o e-mail reservas@buenaventuraresort.com, com os dados da reserva.
			</li>
		</ol>
		<p>&nbsp;</p>
		<p>&nbsp;</p>
		<p>&nbsp;</p>
		<p><strong><u>Termos e condi&ccedil;&otilde;es - Hot&eacute;is Grupo Bern</u></strong></p>
		<ol>
			<li>
				Estadia para 2 pessoas com caf&eacute; da manh&atilde; di&aacute;rio inclu&iacute;do, acesso
				&agrave; internet nas &aacute;reas p&uacute;blicas e no quarto, acesso &agrave;s
				&aacute;reas comuns (piscina e academia). Ocupa&ccedil;&atilde;o m&aacute;xima em um quarto
				para 2 adultos.
			</li>
			<li>
				Cancelamento: O cancelamento ser&aacute; poss&iacute;vel, mas voc&ecirc; ter&aacute; apenas
				mais 4 meses para us&aacute;-lo.&nbsp;
			</li>
			<li>
				Em caso de n&atilde;o comparecimento, especifique a pol&iacute;tica de n&atilde;o
				comparecimento: Em caso de n&atilde;o comparecimento, quando o h&oacute;spede quiser
				us&aacute;-lo novamente, ele s&oacute; poder&aacute; faz&ecirc;-lo em uma noite, a outra
				ser&aacute; perdida.
			</li>
			<li>
				Ser&atilde;o permitidas tr&ecirc;s altera&ccedil;&otilde;es de data na reserva, sujeitas
				&agrave; disponibilidade de quartos. Altera&ccedil;&otilde;es adicionais ser&atilde;o
				cobradas a uma taxa de $ 25 por altera&ccedil;&atilde;o. O custo por pessoa adicional
				&eacute; de $ 20 em hot&eacute;is da cidade e $ 95 em resorts como o Gamboa e o Westin Playa
				Bonita.
			</li>
			<li>Animais de estima&ccedil;&atilde;o n&atilde;o s&atilde;o permitidos</li>
			<li>
				Todas as reservas devem ser garantidas com um cart&atilde;o de cr&eacute;dito v&aacute;lido.
				O m&eacute;todo de pagamento ser&aacute; solicitado no check-in. Caso n&atilde;o seja
				apresentada a garantia, qualquer despesa incorrida dentro do hotel dever&aacute; ser paga no
				momento da apresenta&ccedil;&atilde;o da conta.
			</li>
			<li>
				O hor&aacute;rio de check-in come&ccedil;a &agrave;s 15h00 e o checkout &agrave;s 12h00.
			</li>
			<li>
				As estadias neste hotel n&atilde;o podem ser usadas em: Dia da Independ&ecirc;ncia do
				Panam&aacute; (1 a 7 de novembro, 10 de novembro e 28 de novembro de 2023), Natal e Ano Novo
				(22 de dezembro a 2 de janeiro de 2024), Carnavais no Panam&aacute; (9 a 13 de fevereiro de
				2024) e Semana Santa (27 a 31 de mar&ccedil;o de 2024).
			</li>
			<li>Outras restri&ccedil;&otilde;es podem ser aplicadas.</li>
			<li>Sujeito a disponibilidade.</li>
		</ol>
		<p>
			Compa&ntilde;&iacute;a Paname&ntilde;a de Aviaci&oacute;n, S.A. (Copa Airlines) se reserva o
			direito de cancelar esta competi&ccedil;&atilde;o a qualquer momento e por qualquer motivo. A
			empresa tamb&eacute;m se reserva o direito de alterar as datas e/ou os termos da
			competi&ccedil;&atilde;o a qualquer momento<strong>.</strong>
		</p>
	</div>
{/if}

<style>
	ol {
		@apply list-decimal list-outside ml-24 my-16 pl-16;
	}
</style>
