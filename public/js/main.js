const DATATABLE_PTBR = {
	"sEmptyTable": "Nenhum registro encontrado",
	"sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
	"sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
	"sInfoFiltered": "(Filtrados de _MAX_ registros)",
	"sInfoPostFix": "",
	"sInfoThousands": ".",
	"sLengthMenu": "_MENU_ resultados por página",
	"sLoadingRecords": "Carregando...",
	"sProcessing": "Processando...",
	"sZeroRecords": "Nenhum registro encontrado",
	"sSearch": "Pesquisar",
	"oPaginate": {
		"sNext": "Próximo",
		"sPrevious": "Anterior",
		"sFirst": "Primeiro",
		"sLast": "Último"
	},
	"oAria": {
		"sSortAscending": ": Ordenar colunas de forma ascendente",
		"sSortDescending": ": Ordenar colunas de forma descendente"
	}
}

$(document).ready(function() {
    $('#table_user').DataTable( {
        dom: 'Bfrtip',
		lengthMenu: [
			[5, 10, 25, -1],
			['5 LINHAS', '10 LINHAS', '25 LINHAS', 'TODAS']
		],
		buttons: [
			'pageLength',
			{
				extend: 'excelHtml5',
				title: 'TABELA DE USUARIOS CADASTRADOS',
				exportOptions: {
					columns: [0, 1, 2]
				}
			},
            {
				extend: 'copyHtml5',
				title: 'TABELA DE USUARIOS CADASTRADOS',
				exportOptions: {
					columns: [0, 1, 2]
				}
			},
			{
				extend: 'pdfHtml5',
				title: 'TABELA DE USUARIOS CADASTRADOS',
				exportOptions: {
					columns: [0, 1, 2]
				}
			}
		],


		"oLanguage": DATATABLE_PTBR
    } );

    table.buttons().container().appendTo( '#example_wrapper .col-md-6:eq(0)');

	$("#btn_edit_user").click(function(){
		 
		Swal.fire({
			icon: 'success',
			title: 'Oops...',
			text: 'Something went wrong!',
			footer: '<a href="">Why do I have this issue?</a>'
		})
		
	});

} );

function confirm_delete(id, users){   

	Swal.fire({
	  title: 'Deseja excluir esse usuario:'+users+'?',
	  icon: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  CancelButtonColor: '#d33',
	  confirmButtonText: `CONFIRMAR`,
	  cancelButtonText: `CANCELAR`,
	}).then((result) => {
	  /* Read more about isConfirmed, isDenied below */
	  if (result.isConfirmed) {
		Swal.fire('Ação confirmada com sucesso!', '', 'success');
		window.location = '/delete/'+id;
	  }
	})
}

