// ********************************************************************* //
// * LATEST CORE 3.0 - Default FRENCH Functions
// * (Do NOT alter this document! - Override defaults in the document <head>)
// ********************************************************************* //

// DECLARE GLOBAL VARS //
var moduleID = '1049';

$(document).ready(function () {
	$('.tab-pane > h3').each(function () {
		$(this).insertBefore($(this).parent());
	});
});
// ===============================
// MODULE PRINT VIEW CONTROL
// ===============================
$(document).ready(function () {

	// Auto controls hiding of elements in Print View or Module View.
	if (printVersion) {
		$(document.body).addClass('prt');
	}
	else {
		$(document.body).addClass('dyn');
	};
});

// ===============================
// JQUERY UI COMPONENTS
// ===============================

// Sortable List Items (jQuery UI)
$(function () {
	$('.sortable').sortable({ placeholder: 'ui-state-highlight' });
	$('.sortable').disableSelection();
});

// Back-to-Top Button
$(function () {
	// hide .back-top first
	$('.back-top').hide();
	// fade in .back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.back-top').fadeIn();
			} else {
				$('.back-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('.back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
});

// ===============================
// BOOTSTRAP COMPONENTS
// ===============================

// Tooltips and Popovers
$(function () {
	$('[data-toggle="tooltip"]').tooltip();
	$('.lc-tip, .lc-tip-top').tooltip({ placement: 'top' });
	$('.lc-tip-right').tooltip({ placement: 'right' });
	$('.lc-tip-bottom').tooltip({ placement: 'bottom' });
	$('.lc-tip-left').tooltip({ placement: 'left' });

	$('[data-toggle="popover"]').popover();
	$('.lc-pop, .lc-pop-top').popover({ placement: 'top' });
	$('.lc-pop-right').popover({ placement: 'right' });
	$('.lc-pop-bottom').popover({ placement: 'bottom' });
	$('.lc-pop-left').popover({ placement: 'left' });
});

// TABLE OF CONTENTS - Scroll Spy
$(function () {
	$('body').scrollspy({ target: '.sidebar-toc' });
});


// ===============================
// LEARNING INTERACTIONS
// ===============================
$(function () {

	// MULTIPLE CHOICE QUESTION - RADIO BUTTONS
	$('.radio .submit-button').click(function () {
		var my_boolean = false;
		for (i = 1; i < this.form.length - 1; i++) {
			if (this.form[i].checked == true) {
				my_boolean = true;
			}
		}//end for loop

		if (my_boolean) {
			//alert(i);
			$(this).attr('disabled', 'disabled').addClass('btn-default').removeClass('btn-primary');
			$(this).parent().parent().parent().children('.answer')
				.css('display', 'block');
			$(this).parent().parent().parent().children('.message')
				.css('display', 'none');
			$(this).siblings('.correct')
				.addClass('correct-answer');

			$(this).closest('.question-wrap').next('.show-after').show();
			$(this).closest('.interaction-question').next('.show-after').show();
			$(this).closest('.show-after').next('.show-after').show();
		} else {
			$(this).parent().parent().parent().children('.answer')
				.css('display', 'none');
			$(this).parent().parent().parent().children('.message')
				.css('display', 'block');
			$(this).siblings('.correct')
				.removeClass('correct-answer');
		}//end if else
	});

	// MULTIPLE SELECT QUESTIONS - CHECKBOXES
	$('.checkboxes .submit-button').click(function () {
		var my_boolean = false;
		for (i = 1; i < this.form.length - 1; i++) {
			if (this.form[i].checked == true) {
				my_boolean = true;
			}
		}//end for loop

		if (my_boolean) {
			//alert(i);
			$(this).attr('disabled', 'disabled').addClass('btn-default').removeClass('btn-primary');
			$(this).parent().parent().parent().children('.answer')
				.css('display', 'block');
			$(this).parent().parent().parent().children('.message')
				.css('display', 'none');
			$(this).siblings('.correct')
				.addClass('correct-answer');

			$(this).closest('.question-wrap').next('.show-after').show();
			$(this).closest('.interaction-question').next('.show-after').show();
			$(this).closest('.show-after').next('.show-after').show();
		} else {
			$(this).parent().parent().parent().children('.answer')
				.css('display', 'none');
			$(this).parent().parent().parent().children('.message')
				.css('display', 'block');
			$(this).siblings('.correct')
				.removeClass('correct-answer');
		}//end if else
	});

	// SHORT/LONG ANSWER QUESTION - TEXT ENTRY 
	$('.textentry .submit-button').click(function () {
		$(this).attr('disabled', 'disabled').addClass('btn-default').removeClass('btn-primary');
		$(this).closest('.question-wrap').find('.answer').show();
		$(this).closest('.question-wrap').find('.correct').addClass('correct-answer');
		$(this).closest('.question-wrap').next('.show-after').show();

		$(this).closest('.interaction-question').next('.show-after').show();
		$(this).closest('.show-after').next('.show-after').show();
	});

	// SHORT/LONG ANSWER QUESTION (MINIMUM CHARACTER REQUIREMENT) - TEXT ENTRY
	$('.req-text').each(function () {
		$('.submit-button').click(function () {
			var inputText = $(this).parent().find('.text-response').val();
			var characterMin = $(this).parent().find('.text-response').attr('data-text-min');

			if (inputText.length > characterMin) {
				$(this).attr('disabled', 'disabled').addClass('btn-default').removeClass('btn-primary');
				$(this).closest('.question-wrap').find('.answer').show();
				$(this).closest('.question-wrap').find('.correct').addClass('correct-answer');
				$(this).closest('.question-wrap').next('.show-after').show();
				$(this).parent().parent().siblings('.message').css('display', 'none');

				$(this).closest('.interaction-question').next('.show-after').show();
				$(this).closest('.show-after').next('.show-after').show();
			}
			else {
				$(this).parent().parent().siblings('.message').css('display', 'block');
			}
		});
	});

	// COMPLETE THE STATEMENT - INLINE DROPDOWNS
	$('.inlinedropdowns .submit-button').click(function () {
		var my_boolean = false;
		var ddArray = [];
		var ddCount = $(this).parents('.inlinedropdowns').find('select option:selected').length;
		for (i = 0; i < ddCount; i++) {
			var selectedOption = $(this).parents('.inlinedropdowns').find('select').eq(i).children('option:selected').val();
			ddArray.push(selectedOption);
			if (selectedOption !== "--") {
				my_boolean = true;
			}
		}//end for loop
		if (my_boolean) {
			$(this).attr('disabled', 'disabled').addClass('btn-default').removeClass('btn-primary');
			$(this).parent().children('.dropdown_correct').css('display', 'block');
			$(this).parent().parent().parent().children('.answer').css('display', 'block');
			$(this).parent().parent().siblings('.message').css('display', 'none');
			$(this).siblings('.correct').addClass('correct-answer');

			//display show-after
			$(this).closest('.question-wrap').next('.show-after').show();
			$(this).closest('.interaction-question').next('.show-after').show();
			$(this).closest('.show-after').next('.show-after').show();
		} else {
			$(this).parent().parent().siblings('.message').css('display', 'block');
		}
	});

	// REORDERING QUESTIONS - SORTABLE LIST
	$('.reordering .submit-button').click(function () {
		$(this).attr('disabled', 'disabled').addClass('btn-default').removeClass('btn-primary');
		$(this).parent().children('.dropdown-correct')
			.css('display', 'block');
		$(this).parent().parent().parent().children('.answer')
			.css('display', 'block');
		$(this).siblings('.correct')
			.addClass('correct-answer');

		$(this).closest('.question-wrap').next('.show-after').show();
		$(this).closest('.interaction-question').next('.show-after').show();
		$(this).closest('.show-after').next('.show-after').show();
	});

	// NESTED QUESTION - Reset
	$('.show-after').hide();

	// DRAG AND DROP QUESTION - Done
	$('.question-wrap-drag .done_drag').click(function () {
		$(this).closest('.question-wrap-drag').find('.answer').show();
		$(this).closest('.question-wrap-drag').find('.correct').addClass('correct-answer');
		$(this).closest('.question-wrap-drag').next('.show-after').show();
	});
	// DRAG AND DROP QUESTION - Reset
	$('.question-wrap-drag .reset_drag').click(function () {
		$(this).closest('.question-wrap-drag').find('.answer').hide();
		$(this).closest('.question-wrap-drag').find('.correct').removeClass('correct-answer');
		$(this).closest('.question-wrap-drag').next('.show-after').hide();
	});

	// DRAWING QUESTION - Done
	$('.question-wrap-draw .done').click(function () {
		$(this).closest('.question-wrap-draw').find('.answer').show();
		$(this).closest('.question-wrap-draw').find('.correct').addClass('correct-answer');
		$(this).closest('.question-wrap').find('.answer').show();
		$(this).closest('.question-wrap-draw').next('.show-after').show();
	});
	// DRAWING QUESTION - Reset
	$('.question-wrap-draw .reset').click(function () {
		$(this).closest('.question-wrap-draw').find('.answer').hide();
		$(this).closest('.question-wrap-draw').find('.correct').removeClass('correct-answer');
		$(this).closest('.question-wrap').find('.answer').show();
		$(this).closest('.question-wrap-draw').next('.show-after').hide();
	});

});


// ===============================
// Radio Button Image Switcher
// ===============================
$(document).ready(function () {
	$('.radio-image-selector').each(function () {
		$(this).find('.rs-list li input').each(function (r) {
			var inputValue = r;
			$(this).val(r);
		});
		var currentInput = $(this).find('input[type=radio]:checked').val();
		currentInput = parseInt($(this).find(':checked').val());
		//currentInput += -1; used with manual values to begin index @ 1

		$(this).children('.rs-content').children().eq(currentInput).css('display', 'block');

		$(this).on('input[type=radio]').change(function () {
			currentInput = parseInt($(this).find(':checked').val());
			//currentInput += -1; used with manual values to begin index @ 1
			$(this).find('.rs-content').children().css('display', 'none');
			$(this).find('.rs-content').children().eq(currentInput).css('display', 'block');

		});
		var listChildNum = $(this).find('.rs-list').children().length;
		var contentChildNum = $(this).find('.rs-content > *').length;
		if (listChildNum !== contentChildNum) {
			$(this).prepend('<p style="font-weight:bold; font-style:italic; color:red;">Number of radio buttons does NOT match number of content items!</p>');
		}
	});
});


// ===============================
// Collapsible panel icon indicator
// ===============================
$(document).ready(function () {
	function togglePanelIcon(e) {
		$(e.target)
			.prev('.panel-heading')
			.find('.glyphicon')
			.toggleClass('glyphicon-plus-sign glyphicon-minus-sign');
	}
	$('.panel-collapse').on('hidden.bs.collapse', togglePanelIcon);
	$('.panel-collapse').on('shown.bs.collapse', togglePanelIcon);
});


// ===============================
// PROGRAMMER NOTES
// ===============================
$(document).ready(function () {
	// Convert preprogrammer notes to programmer notes
	$('.preprogram-note').each(function (noteCount) {
		var progNoteID = "pnote-" + noteCount;
		$(this).prepend('<div class="panel-heading"><h4 class="panel-title"><a href="#' + progNoteID + '" data-toggle="collapse">&lt;Programmer Note&gt;</a></h4></div>');
		$(this).addClass('panel');
		$(this).children('p').wrap('<div id="' + progNoteID + '" class="panel-collapse collapse"><div class="panel-body"></div></div>');
		$(this).removeClass('preprogram-note').addClass('programmer-note');
	});
});


// ===============================
// PRECURSOR INTERACTIONS
// ===============================
$(document).ready(function () {
	// Convert predraw to drawing
	$('.predrawing-question').each(function () {
		$(this).addClass('drawing-question').removeClass('predrawing-question');
	});

	// DRAW INTERACTIONS --
	var backgroundImg;
	var colors = [];
	var brushSizes = [];
	$('.pre-draw').each(function () {
		$(this).prepend('<div class="panel-body"></div>');
		$(this).children('p').wrap('<div></div>');
		$(this).removeClass('pre-draw').addClass('drawing-question');
	});
});


// ===============================
// MODULE TITLE
// ===============================
$(document).ready(function () {
	var moduleTitle = $('title').text();
	$('.module-title-text').html(moduleTitle);
});


// ===============================
// MODULE QUIZ AND SURVEY PROMPTS
// ===============================

// Module Preassessment, Quiz, and Survey Modal Prompts
$(document).ready(function () {
	// Preassessment Text
	$('#preassessment-message').prepend('<div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">MetEd et le programme COMET® font partie de <a href="http://www.ucp.ucar.edu/">UCP</a> [University Corporation for Atmospheric Research (UCAR) Community Programs], un groupe interne de UCAR, et sont sponsorisés par le </button><h4 class="modal-title" id="preassessment-label">Pré-évaluation</h4></div><div class="modal-body" id="module-preassessment-modal"><p>Avant de commencer cette leçon, veuillez compléter une rapide pré-évaluation en cliquant sur le bouton ci-dessous.</p><p>Cette pré-évaluation couvre le matériel de la leçon que vous êtes sur le point de suivre. Elle vous aidera à évaluer votre niveau actuel de connaissances sur ce sujet. Vous aurez aussi l’occasion de compléter un quiz avec des questions très similaires à la fin de la leçon. En comparant les deux, cela vous fera réaliser ce que vous avez pu apprendre et améliorer et nous renseignera sur l’atteinte des objectifs de cette leçon.</p></div>');

	// Quiz Prompt
	//var moduleQuiz = $('#quiz-prompt').attr('data-item-id');
	$('#quiz-prompt').append('<div id="userQuiz" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="userquiz-label" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">MetEd et le programme COMET® font partie de <a href="http://www.ucp.ucar.edu/">UCP</a> [University Corporation for Atmospheric Research (UCAR) Community Programs], un groupe interne de UCAR, et sont sponsorisés par le </button><h4 class="modal-title" id="userquiz-label">Questionnaire</h4></div><div class="modal-body" id="module-userquiz-modal"><p>Pour utiliser les liens de cette page, vous devez être connecté. Si vous n’avez ouvert pas de session MetEd ou si vous devez créer votre compte MetEd, des messages vous indiqueront la marche à suivre. Votre réponse à une question est sauvegardée chaque fois que choisissez «&nbsp;Question suivante&nbsp;», même si vous fermez votre navigateur et continuez plus tard. Vous pouvez sauter une question et y revenir n’importe quand. Quand vous avez sauvegardé vos réponses à toutes les questions, votre note est calculée et signalée.</p><a href="http://www.meted.ucar.edu/about_external_lms.htm" target="_blank">Important note for NOAA, Air Force, and Navy LMS users!</a> </div><div class="modal-footer"> <a class="btn btn-default" href="/lesson/' + moduleID + '/quiz" target="_blank">Cliquez pour répondre au questionnaire &raquo;</a> </div></div></div></div>');

	// Survey Prompt
	$('#quiz-prompt').append('<div id="userSurvey" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="usersurvey-label" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">MetEd et le programme COMET® font partie de <a href="http://www.ucp.ucar.edu/">UCP</a> [University Corporation for Atmospheric Research (UCAR) Community Programs], un groupe interne de UCAR, et sont sponsorisés par le </button><h4 class="modal-title" id="usersurvey-label">Sondage auprès des utilisateurs</h4></div><div class="modal-body" id="module-usersurvey-modal"><p>Votre aide nous est indispensable pour améliorer nos prestations. Nous vous remercions de bien vouloir nous aider, en nous faisant savoir ce que vous pensez de ce module. Vos réponses nous aideront à réaliser des enseignements plus efficaces à l’avenir. </p><p>En cliquant sur le lien ci-après, vous accéderez à une brève enquête de satisfaction. Pour cela, vous devrez avoir ouvert une session, utilisant votre compte d’utilisateur de MetEd. Si vous n’avez ouvert pas de session MetEd ou si vous devez créer votre compte MetEd, des messages vous indiqueront la marche à suivre.</p></div><div class="modal-footer"> <a class="btn btn-default" href="/lesson/' + moduleID + '/survey" target="_blank">Évaluation du cours &raquo;</a> </div></div></div></div>');
});

// ===============================
// PRINT LESSON IMG CAPTION FIX
// ===============================
function captionFix() {
	$('div.center.caption').each(function () {
		if ($(this).children('img').length > 0) {
			var capWidth = $(this).children('img')[0].clientWidth;
			if (capWidth >= 960) {
				$(this).css('max-width', '960px');
			} else {
				$(this).css('max-width', '' + capWidth + 'px');
			}
		} else {
			var loopCapWidth = $(this).prevAll().closest('a').children('img')[0].clientWidth;
			$(this).css('max-width', '' + loopCapWidth + 'px');
		}
	});
}