$(document).ready(function ()
{
    var cells = $(".cell");
    var colorCount = 0;
    var lastSquare = "cell";

    for (var i = 0; i < cells.length; i++)
    {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");

    }
        $(".cell").click(function () {

            if ($(this).attr("class") == "cell piece red") {
                if ((lastSquare) == "cell") {
                    $(this).addClass("highlight");
                    $(this).removeClass("cell piece red");
                    lastSquare = "cell piece red";
                }
                else {
                    $(this).addClass(lastSquare);
                    $(this).removeClass("red");
                    $(".highlight").addClass("cell");
                    $(".highlight.cell").removeClass("highlight");
                    lastSquare = "cell";
                }
            }
            else if ($(this).attr("class") == "cell piece black") {
                if ((lastSquare) == "cell") {
                    $(this).addClass("highlight");
                    $(this).removeClass("cell piece black");
                    lastSquare = "cell piece black";
                }
                else {
                    $(this).addClass(lastSquare);
                    $(this).removeClass("black");
                    $(".highlight").addClass("cell");
                    $(".highlight.cell").removeClass("highlight");
                    lastSquare = "cell";
                }
            }
            else {
                $(this).addClass(lastSquare);
                $(".highlight").addClass("cell");
                $(".highlight.cell").removeClass("highlight");
                lastSquare = "cell";
            }

        });
});