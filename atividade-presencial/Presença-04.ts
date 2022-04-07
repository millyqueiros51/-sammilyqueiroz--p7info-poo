//Criando uma classe
classe  Fila {
    // Passando os atributos dessa classe
    Pessoas : string [ ]  =  [ ]
    maxQueue  =  5
    fim  =  0
    nprimeiro  =  0
    nItens  =  0

    // Metodo para verificar se a Fila está vazio
    isEmpty ( ) : número {
        if ( this . nItems  ==  0 ) {
            retornar  1
        } senão {
            retornar  0
        }
    }
    // Metodo para verificar se a Fila está cheia
    isFull ( ) : número {
        if ( this . fim  ==  this . maxQueue ) {
            retornar  1
        } senão {
            retornar  0
        }
    }

    // Método para inserir elementos na Fila
    addQueue ( nome : string ) : void {
        if ( this . isFull ( )  ==  1 ) {
            consola . log ( 'Fila está cheia!' )
        } senão {
            isso . Gente [ isso . fim ]  =  nome
            consola . log ( nome + 'entrou na fila' )
            isso . fim ++
            isso . nItens ++
        }
    }
    // Método para remover elementos da Fila
    removeQueue ( ) : string  |  vazio  {
        if ( this . isEmpty ( )  ==  1 ) {
            consola . log ( 'A fila está vazia!' )
        } senão {
            deixe  temp  =  this . Gente [ isso . nprimeiro ]
            consola . log ( this . People [ this . nprimeiro ] + 'saiu da fila' )
            isso . nprimeiro ++
            isso . nItens --
             temperatura de retorno
        }
    }
    // Método para mostrar um Fila
    viewQueue ( ) : void {
        if ( this . isEmpty ( )  ==  1 ) {
            consola . log ( 'Fila não tem ninguém!' )
        } senão {
            seja  np  =  isso . nprimeiro
            for ( deixe  i = 0 ;  i  <  this . nItems ;  i ++ ) {
                consola . log ( this . People [ np ] + 'está na fila' )
                np ++
            }
        }
    }
}
// Criando um objeto do tipo Queue
let  fila : Queue  =  new  Queue ( )

// Inserindo pessoas na fila
fila . addQueue ( 'Clau' )
fila . addQueue ( 'Maria' )
fila . addQueue ( 'Pedro' )
fila . addQueue ( 'Julia' )
consola . log ( '-------------------------' )
// Removendo pessoas da fila
fila . removeQueue ( )
fila . removeQueue ( )
fila . removeQueue ( )
consola . log ( '-------------------------' )
// Inserindo mais uma pessoa na fila
fila . addQueue ( 'Cristina' )
consola . log ( '-------------------------' )
//ficando um fila (Possui 2 pessoas)
fila . verFila ( )
consola . log ( '-------------------------' )
// Removendo o resto das pessoas da fila
fila . removeQueue ( )
fila . removeQueue ( )
consola . log ( '-------------------------' )
// Ficando a fila (Estázia)
fila . verFila ( )
